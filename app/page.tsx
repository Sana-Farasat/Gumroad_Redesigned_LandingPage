import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PhilosophySection from "@/components/PhilosophySection";
import GumroadWaySection from "@/components/GumroadWaySection";
import SmallBetsSection from "@/components/SmallBetsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DiscoverySection from "@/components/DiscoverySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PhilosophySection />
        <GumroadWaySection />
        <PricingSection />
        <SmallBetsSection />
        <TestimonialsSection />
        <DiscoverySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
