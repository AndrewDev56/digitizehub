"use client";

import { useEffect, useRef } from "react";

export default function SiteBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    video.muted = true;
    video.playsInline = true;
    void video.play().catch(() => {});
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/videos/digi-bg-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
