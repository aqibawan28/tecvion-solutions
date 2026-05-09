import { GlassCard } from "@/components/ui/glass-card";
import { SectionIntro } from "@/components/ui/section-intro";

const projects = [
  ["Stackify AI", "AI productivity app", "Mobile UI/UX, product strategy, and AI integration. 10K downloads in week one."],
  ["Brew & Co.", "Brand + social engine", "Premium cafe identity and social system. 8K new followers in 3 months."],
  ["Zenfin", "Fintech launch system", "Naming, brand identity, and web platform delivered in 6 weeks."],
];

export function PortfolioPreview() {
  return (
    <section id="work" className="section">
      <SectionIntro eyebrow="Portfolio preview" title="Floating software stories with real business movement." />
      <div className="work-grid">
        {projects.map(([title, type, copy]) => (
          <GlassCard key={title} className="work-card">
            <div className="screen" />
            <small>{type}</small>
            <h3>{title}</h3>
            <p>{copy}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
