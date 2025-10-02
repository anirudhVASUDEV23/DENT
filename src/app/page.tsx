import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItworks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItworks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}
