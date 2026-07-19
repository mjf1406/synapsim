import { createFileRoute } from "@tanstack/react-router";

import { FAQSection } from "./-home-components/faq";
import { FeaturesSection } from "./-home-components/features";
import { FooterSection } from "./-home-components/footer";
import { HeroSection } from "./-home-components/hero";
import { PagesSection } from "./-home-components/pages";
import { TeachersSection } from "./-home-components/teachers";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-4">
      <HeroSection />
      <PagesSection />
      <TeachersSection />
      <FeaturesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
