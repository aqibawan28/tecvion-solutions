import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Book a premium strategy call."
        copy="Tell us what you are building. We will help you clarify the right digital direction, scope, and next step."
      />
      <ContactSection />
    </SiteLayout>
  );
}
