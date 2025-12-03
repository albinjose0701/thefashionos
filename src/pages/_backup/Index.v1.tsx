import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CreativeChallengeSection from "@/components/landing/CreativeChallengeSection";
import CreativeCopilotSection from "@/components/landing/CreativeCopilotSection";
import ModulesSection from "@/components/landing/ModulesSection";
import FlowSection from "@/components/landing/FlowSection";
import FeaturesGridSection from "@/components/landing/FeaturesGridSection";
import TechnologySection from "@/components/landing/TechnologySection";
import DesignerTypesSection from "@/components/landing/DesignerTypesSection";
import EarlyAccessSection from "@/components/landing/EarlyAccessSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalPushSection from "@/components/landing/FinalPushSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CreativeChallengeSection />
        <CreativeCopilotSection />
        <ModulesSection />
        <FlowSection />
        <FeaturesGridSection />
        <TechnologySection />
        <DesignerTypesSection />
        <EarlyAccessSection />
        <FAQSection />
        <FinalPushSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
