import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { SectionIntro } from "@/components/ui/section-intro";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, CircuitBoard, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";

const values = [
  ["Strategy before pixels", "Every design decision starts with the business goal."],
  ["Premium execution", "We care about polish, performance, motion, and details."],
  ["Future-ready systems", "We build platforms that can evolve with your company."],
];

const tech = ["Next.js", "React", "TypeScript", "Three.js", "Framer Motion", "GSAP", "AI workflows", "Cloud APIs"];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Tecvion"
        title="We design the digital operating layer for ambitious brands."
        copy="Tecvion Solutions is a strategy, design, and software agency helping startups, premium brands, and modern businesses launch intelligent digital ecosystems."
      />
      <section className="section split-section">
        <SectionIntro
          eyebrow="Vision & mission"
          title="Make advanced digital experiences feel clear, premium, and useful."
          copy="Our mission is to connect brand thinking, product design, and software engineering into one focused growth system."
        />
        <div className="stack-list">
          <GlassCard><Rocket /><h3>Company introduction</h3><p>We build brands, websites, mobile apps, AI solutions, and growth systems for businesses ready to move beyond generic digital presence.</p></GlassCard>
          <GlassCard><Users /><h3>Team philosophy</h3><p>Senior specialists, clear communication, and full ownership from discovery to launch.</p></GlassCard>
        </div>
      </section>
      <section className="section">
        <SectionIntro eyebrow="Company values" title="The operating principles behind every project." />
        <div className="three-grid">
          {values.map(([title, copy]) => <GlassCard key={title}><ShieldCheck /><h3>{title}</h3><p>{copy}</p></GlassCard>)}
        </div>
      </section>
      <section className="section split-section">
        <SectionIntro eyebrow="Why Tecvion" title="A full digital partner, not a disconnected vendor." copy="Brand, design, development, AI systems, and growth strategy work better when they are built as one ecosystem." />
        <GlassCard className="tech-cloud">
          <Brain />
          <h3>Technologies we use</h3>
          <div>{tech.map((item) => <span key={item}>{item}</span>)}</div>
          <CircuitBoard className="ghost-icon" />
          <Sparkles className="ghost-icon second" />
        </GlassCard>
      </section>
    </SiteLayout>
  );
}
