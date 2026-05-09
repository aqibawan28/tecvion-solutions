import { GlassCard } from "@/components/ui/glass-card";
import { SectionIntro } from "@/components/ui/section-intro";
import { Brain, Code2, Globe2, Palette, Smartphone, TrendingUp, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
  features: string[];
};

export const services: Service[] = [
  { icon: Palette, title: "Branding & Identity", copy: "Premium brand systems, positioning, visual language, and launch-ready assets.", features: ["Brand strategy", "Identity systems", "Visual direction"] },
  { icon: Smartphone, title: "App Development", copy: "Mobile product design and development for polished customer experiences.", features: ["iOS/Android UI", "Product flows", "Launch support"] },
  { icon: Globe2, title: "Web Development", copy: "Fast, cinematic websites engineered for conversion, performance, and scale.", features: ["Next.js builds", "CMS-ready pages", "Performance QA"] },
  { icon: Brain, title: "AI-Powered Solutions", copy: "AI workflows, smart dashboards, and automation systems for modern teams.", features: ["AI workflows", "Automation", "Dashboards"] },
  { icon: Code2, title: "UI/UX Design", copy: "Interfaces with clean hierarchy, premium motion, and enterprise usability.", features: ["Wireframes", "Design systems", "Prototype testing"] },
  { icon: TrendingUp, title: "Digital Marketing", copy: "Growth strategy, content systems, and conversion optimization loops.", features: ["Campaign pages", "Social systems", "Growth reporting"] },
];

export function ServicesSection() {
  return (
    <section id="services" className="section">
      <SectionIntro eyebrow="Services" title="One connected ecosystem for brand, product, and growth." copy="Focused capabilities that work together instead of disconnected agency services." />
      <div className="service-layout">
        {services.map(({ icon: Icon, title, copy }) => (
          <GlassCard key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{copy}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
