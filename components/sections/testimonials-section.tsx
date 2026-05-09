import { GlassCard } from "@/components/ui/glass-card";
import { SectionIntro } from "@/components/ui/section-intro";

const testimonials = [
  ["Tecvion did not just build us a website. They built us a brand. We saw a 40% increase in leads within 60 days.", "Ahmed R.", "Founder, TechLaunch"],
  ["Our social media was dead before Tecvion. Three months later, orders doubled and the brand finally felt premium.", "Sara N.", "Owner, Brew & Co."],
  ["The mobile app they built is stunning. Our users love it, our investors love it, and the process was clear from day one.", "Michael K.", "CEO, Stackify AI"],
];

export function TestimonialsSection() {
  return (
    <section className="section">
      <SectionIntro eyebrow="Testimonials" title="Glass-clear feedback from teams who trusted the process." />
      <div className="testimonial-layout">
        {testimonials.map(([quote, name, role]) => (
          <GlassCard key={name}>
            <b>5.0 / 5</b>
            <p>"{quote}"</p>
            <strong>{name}</strong>
            <span>{role}</span>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
