import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { services } from "@/components/sections/services-section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionIntro } from "@/components/ui/section-intro";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Futuristic digital capabilities, built as one connected system."
        copy="From brand identity to AI-powered workflows, Tecvion gives your business the strategy, design, and technology layer it needs to grow."
      />
      <section className="section">
        <div className="service-detail-grid">
          {services.map(({ icon: Icon, title, copy, features }) => (
            <GlassCard key={title} className="service-detail-card">
              <Icon />
              <h2>{title}</h2>
              <p>{copy}</p>
              <div className="detail-columns">
                <div>
                  <strong>Features</strong>
                  {features.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div>
                  <strong>Process</strong>
                  <span>Audit</span><span>Prototype</span><span>Build</span><span>Optimize</span>
                </div>
                <div>
                  <strong>Benefits</strong>
                  <span>Premium perception</span><span>Better conversion</span><span>Scalable systems</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionIntro eyebrow="Visual showcase" title="Every service is designed to look premium and operate clearly." copy="We combine expressive visuals with practical architecture so your digital product feels impressive and usable." />
      </section>
    </SiteLayout>
  );
}
