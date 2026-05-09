import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ContactSection() {
  return (
    <section className="section contact-grid">
      <GlassCard>
        <h2>Tell us what you are building.</h2>
        <form className="contact-form">
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@company.com" /></label>
          <label>Project type<input placeholder="Website, app, AI system..." /></label>
          <label>Message<textarea placeholder="What do you want to create?" rows={5} /></label>
          <button type="button">Send inquiry</button>
        </form>
      </GlassCard>
      <div className="stack-list">
        <GlassCard><h3>Contact information</h3><p>Email: hello@tecvion.com</p><p>Remote-first. Serving USA, UK, UAE, Canada, Australia, and worldwide.</p></GlassCard>
        <GlassCard><h3>WhatsApp consultation</h3><p>Need a faster conversation? Start with a WhatsApp CTA or book a 30-minute discovery call.</p><MagneticButton href="https://wa.me/" variant="ghost">Open WhatsApp</MagneticButton></GlassCard>
        <GlassCard><h3>Social links</h3><p>LinkedIn · Instagram · Behance · Dribbble</p></GlassCard>
      </div>
    </section>
  );
}
