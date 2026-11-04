"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer, [data-cursor="hover"]';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!ring || !dot || !glow) return;

    document.documentElement.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: mouse.x, y: mouse.y };
    let visible = false;
    let hovering = false;
    let pressing = false;
    let raf = 0;

    const show = () => {
      if (visible) return;
      visible = true;
      ring.style.opacity = "1";
      dot.style.opacity = "1";
      glow.style.opacity = "1";
    };

    const hide = () => {
      visible = false;
      ring.style.opacity = "0";
      dot.style.opacity = "0";
      glow.style.opacity = "0";
    };

    const setHover = (on: boolean) => {
      hovering = on;
      ring.classList.toggle("is-hover", on);
      dot.classList.toggle("is-hover", on);
      glow.classList.toggle("is-hover", on);
    };

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      show();

      const target = event.target as Element | null;
      setHover(Boolean(target?.closest(HOVER_SELECTOR)));
    };

    const onDown = () => {
      pressing = true;
      ring.classList.add("is-press");
      dot.classList.add("is-press");
    };

    const onUp = () => {
      pressing = false;
      ring.classList.remove("is-press");
      dot.classList.remove("is-press");
    };

    const tick = () => {
      const ease = hovering ? 0.18 : 0.14;
      ringPos.x += (mouse.x - ringPos.x) * ease;
      ringPos.y += (mouse.y - ringPos.y) * ease;

      const transformRing = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      const transformDot = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)${
        pressing ? " scale(0.7)" : ""
      }`;

      ring.style.transform = transformRing;
      glow.style.transform = transformRing;
      dot.style.transform = transformDot;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointerleave", hide);
    window.addEventListener("pointerenter", show);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerleave", hide);
      window.removeEventListener("pointerenter", show);
    };
  }, []);

  return (
    <div aria-hidden="true" className="site-cursor">
      {/* <div ref={glowRef} className="site-cursor-glow" /> */}
      <div ref={ringRef} className="site-cursor-ring" />
      <div ref={dotRef} className="site-cursor-dot" />
    </div>
  );
}
