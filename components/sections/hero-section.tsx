"use client";

import { HeroOrb } from "@/components/3d/hero-orb";
import { GlassCard } from "@/components/ui/glass-card";
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
        className="hero-stage"
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.78, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroOrb />
        <GlassCard className="system-chip chip-a"><small>System status</small><b>Live growth engine</b></GlassCard>
        <GlassCard className="system-chip chip-b"><small>Delivery model</small><b>Strategy to launch</b></GlassCard>
      </motion.div>
    </section>
  );
}
