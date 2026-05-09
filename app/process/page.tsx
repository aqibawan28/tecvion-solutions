import { SiteLayout } from "@/components/layout/site-layout";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";

export default function ProcessPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Process"
        title="A cinematic path from idea to launch."
        copy="A clear workflow for strategy, design, development, launch, and growth support, with consistent communication at every phase."
      />
      <ProcessSection detailed />
    </SiteLayout>
  );
}
