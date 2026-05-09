import { GlassCard } from "@/components/ui/glass-card";
import { SectionIntro } from "@/components/ui/section-intro";
import { ShieldCheck, TrendingUp, Users, Zap, type LucideIcon } from "lucide-react";

const stats = [
  ["150+", "Projects delivered"],
  ["80+", "Happy clients"],
  ["12+", "Industries served"],
  ["98%", "Client satisfaction"],
];

const cards: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  { icon: ShieldCheck, title: "Transparent delivery", copy: "Clear timelines, clear ownership, and no hidden fees." },
  { icon: Zap, title: "AI-ready thinking", copy: "Modern digital systems designed for intelligent workflows." },
  { icon: Users, title: "Dedicated project lead", copy: "One point of contact from strategy to launch." },
  { icon: TrendingUp, title: "Growth support", copy: "Post-launch optimization, support, and scalable retainers." },
];

export function WhyChooseUs() {
  return (
    <section className="section compact">
      <SectionIntro eyebrow="Why choose us" title="Enterprise-level execution without agency chaos." />
      <div className="metric-grid">{stats.map(([value, label]) => <GlassCard key={value} className="metric"><strong>{value}</strong><span>{label}</span></GlassCard>)}</div>
      <div className="four-grid">
        {cards.map(({ icon: Icon, title, copy }) => <GlassCard key={title}><Icon /><h3>{title}</h3><p>{copy}</p></GlassCard>)}
      </div>
    </section>
  );
}
