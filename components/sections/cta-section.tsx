import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CtaSection() {
  return (
    <section className="section">
      <GlassCard className="final-panel">
        <div>
          <p className="eyebrow">Final CTA</p>
          <h2>Ready To Build The Future Of Your Business?</h2>
          <p>Book a free strategy call and walk away with clarity, a practical direction, and a premium digital partner invested in your growth.</p>
        </div>
        <MagneticButton href="/contact">Start Your Project</MagneticButton>
      </GlassCard>
    </section>
  );
}
