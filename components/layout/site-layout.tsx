"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, type ReactNode } from "react";
import { Navbar } from "./navbar";

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 0.62,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.28,
      touchMultiplier: 1.15,
      lerp: 0.16,
    });
    let rafId = 0;
    let pointerRaf = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const move = (event: PointerEvent) => {
      if (pointerRaf) return;
      const x = event.clientX;
      const y = event.clientY;
      pointerRaf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${Math.round((x / window.innerWidth) * 100)}%`);
        document.documentElement.style.setProperty("--my", `${Math.round((y / window.innerHeight) * 100)}%`);
        pointerRaf = 0;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(pointerRaf);
      lenis.destroy();
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="ecosystem">
      <div className="aurora" />
      <div className="matrix-grid" />
      <div className="node-field" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <Navbar />
      <main>{children}</main>
      <footer className="site-footer">
        <div><strong>Tecvion Solutions</strong><p>Premium digital experiences for modern businesses.</p></div>
        <a href="mailto:hello@tecvion.com">hello@tecvion.com</a>
      </footer>
    </div>
  );
}
