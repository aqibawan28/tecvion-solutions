import { SiteLayout } from "@/components/layout/site-layout";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <TrustedBrands />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <CtaSection />
    </SiteLayout>
  );
}
