"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    let frame = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    async function boot() {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.05,
        easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
        smoothWheel: true,
        wheelMultiplier: 0.86,
        touchMultiplier: 1.15
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    }

    boot();

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
