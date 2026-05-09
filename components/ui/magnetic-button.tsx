"use client";

import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      gsap.to(el, {
        x: (event.clientX - rect.left - rect.width / 2) * 0.14,
        y: (event.clientY - rect.top - rect.height / 2) * 0.2,
        scale: 1.035,
        duration: 0.32,
        ease: "power3.out",
      });
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.45, ease: "power3.out" });
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <Link ref={ref} className={`btn ${variant}`} href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
