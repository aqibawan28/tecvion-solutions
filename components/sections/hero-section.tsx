"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.p
          className="signal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ><span />AI-powered digital agency</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >Transforming Businesses Into Powerful Digital Ecosystems.</motion.h1>
        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Tecvion Solutions helps startups, premium brands, and modern businesses build futuristic digital experiences through branding, UI/UX design, app development, AI-powered systems, and growth-focused technology solutions.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="/contact">Start Your Project</MagneticButton>
          <MagneticButton href="/services" variant="ghost">Explore Services</MagneticButton>
        </motion.div>
        <motion.div className="proof-row" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.36 } } }}>
          {[
            ["150+", "projects delivered"],
            ["98%", "client satisfaction"],
            ["3x", "avg. ROI"],
          ].map(([value, label]) => (
            <motion.span key={label} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
              <strong>{value}</strong>{label}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="hero-object-stage"
        initial={{ opacity: 0, x: 70, y: 20, scale: 0.88, rotate: -10, filter: "blur(18px)" }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.05, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <motion.video
          className="hero-motion-object hero-motion-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          animate={{
            y: [0, -24, 8, 0],
            rotate: [0, 3.5, -2.5, 0],
            scale: [1, 1.035, 0.99, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <source src="/hero-motion-object.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          className="hero-object-glow"
          animate={{ opacity: [0.36, 0.68, 0.42], scale: [0.92, 1.08, 0.96] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
