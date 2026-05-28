import HeroSection from "@/components/HeroSection";

import TiposFianzasSection from "@/components/TiposFianzasSection";
import ProcessSection from "@/components/ProcessSection";
import DocumentosSection from "@/components/DocumentosSection";
import LeadFormSection from "@/components/LeadFormSection";
import CTABanner from "@/components/UrgencySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TiposFianzasSection />
      <ProcessSection />
      <DocumentosSection />
      <LeadFormSection />
      <CTABanner />
      <TestimonialsSection />
      <FAQSection />
      <PartnersSection />
    </>
  );
}
