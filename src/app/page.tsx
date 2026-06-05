import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TiposFianzasSection from "@/components/TiposFianzasSection";
import ProcessSection from "@/components/ProcessSection";
import DocumentosSection from "@/components/DocumentosSection";
import CalculadoraPrima from "@/components/CalculadoraPrima";
import LeadFormSection from "@/components/LeadFormSection";
import CTABanner from "@/components/UrgencySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TiposFianzasSection />
      <ProcessSection />
      <DocumentosSection />
      <CalculadoraPrima />
      <LeadFormSection />
      <CTABanner />
      <TestimonialsSection />
      <FAQSection />
      <PartnersSection />
    </>
  );
}
