"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function GlassCard({
  className = "",
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.985, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      className={`glass ${className}`}
      {...props}
    />
  );
}
