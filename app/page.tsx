import { CtaSection, SiteFooter } from "@/components/cta-footer";
import { HeroSection } from "@/components/hero-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PageBackground } from "@/components/page-background";
import { ProcessSection } from "@/components/process-section";
import { QuotesSection } from "@/components/quotes-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <PageBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <ServicesSection />
        <WorkSection />
        <QuotesSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
