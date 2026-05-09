"use client";

import { SectionIntro } from "@/components/ui/section-intro";
import { motion } from "framer-motion";

const process = [
  ["01", "Discovery", "We understand your business, audience, offer, and competitive landscape."],
  ["02", "Strategy", "We map the brand, product, content, and growth system before execution."],
  ["03", "Design", "We create cinematic interfaces, brand systems, and interactive prototypes."],
  ["04", "Development", "We build scalable websites, apps, dashboards, and AI-powered workflows."],
  ["05", "Launch", "We QA, deploy, hand over ownership, and support the release."],
  ["06", "Growth", "We optimize performance, conversion, content, and digital systems after launch."],
];

export function ProcessSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="process" className="section split-section">
      <SectionIntro
        eyebrow="Process"
        title="A futuristic workflow from discovery to growth."
        copy={detailed ? "Each phase is designed to keep strategy, design, engineering, and business outcomes aligned." : undefined}
      />
      <div className="process-list">
        {process.map(([step, title, copy], index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.52, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
