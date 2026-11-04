"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  z: number;
  r: number;
  twinkle: number;
  speed: number;
};

export default function SiteAmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const canvas = canvasRef.current;
    const spot = spotRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const pointer = { x: 0.5, y: 0.35, tx: 0.5, ty: 0.35 };
    let scrollY = window.scrollY;
    let targetScroll = window.scrollY;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let dots: Dot[] = [];
    let time = 0;
    const positions: { x: number; y: number; z: number }[] = [];

    const makeDots = () => {
      const count = Math.min(120, Math.floor((width * height) / 12000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: 0.3 + Math.random() * 0.7,
        r: 0.7 + Math.random() * 1.9,
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.4,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeDots();
    };

    const onMove = (event: PointerEvent) => {
      pointer.tx = event.clientX / width;
      pointer.ty = event.clientY / height;
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
    };

    const draw = () => {
      time += 0.016;
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      scrollY += (targetScroll - scrollY) * 0.1;

      if (spot) {
        spot.style.setProperty("--spot-x", `${pointer.x * 100}%`);
        spot.style.setProperty("--spot-y", `${pointer.y * 100}%`);
      }

      ctx.clearRect(0, 0, width, height);

      const scrollShift = scrollY * 0.045;
      const px = pointer.x * width;
      const py = pointer.y * height;
      positions.length = 0;

      for (const dot of dots) {
        let x = dot.x * width;
        let y = ((dot.y * height + scrollShift * dot.z) % (height + 48)) - 24;

        const dx = px - x;
        const dy = py - y;
        const dist = Math.hypot(dx, dy) || 1;
        const pull = Math.max(0, 1 - dist / 240) * 22 * dot.z;
        x -= (dx / dist) * pull;
        y -= (dy / dist) * pull;

        const pulse =
          0.5 + 0.5 * Math.sin(time * dot.speed + dot.twinkle);
        const alpha = 0.14 + pulse * 0.38 * dot.z;
        const radius = dot.r * (0.75 + pulse * 0.45);

        ctx.beginPath();
        ctx.fillStyle =
          dot.z > 0.68
            ? `rgba(255, 0, 54, ${alpha})`
            : `rgba(255, 190, 205, ${alpha * 0.9})`;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        if (dot.z > 0.78 && pulse > 0.72) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 0, 54, ${alpha * 0.18})`;
          ctx.arc(x, y, radius * 3.4, 0, Math.PI * 2);
          ctx.fill();
        }

        positions.push({ x, y, z: dot.z });
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < positions.length; i++) {
        const a = positions[i];
        for (let j = i + 1; j < positions.length; j++) {
          const b = positions[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 100) continue;

          const midDist = Math.hypot((a.x + b.x) / 2 - px, (a.y + b.y) / 2 - py);
          if (midDist > 170) continue;

          const lineAlpha = (1 - d / 100) * (1 - midDist / 170) * 0.2;
          ctx.strokeStyle = `rgba(255, 0, 54, ${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <div className="site-ambient-orb site-ambient-orb-a" />
      <div className="site-ambient-orb site-ambient-orb-b" />
      <div className="site-ambient-orb site-ambient-orb-c" />
      <div ref={spotRef} className="site-ambient-cursor" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_12%,rgba(0,0,0,0.4)_75%,rgba(0,0,0,0.78)_100%)]" />
    </div>
  );
}
