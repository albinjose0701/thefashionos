import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CreativeChallengeSection from "@/components/landing/CreativeChallengeSection";
import ModulesSection from "@/components/landing/ModulesSection";
import FlowSection from "@/components/landing/FlowSection";
import FeaturesGridSection from "@/components/landing/FeaturesGridSection";
import TechnologySection from "@/components/landing/TechnologySection";
import DesignerTypesSection from "@/components/landing/DesignerTypesSection";
import ContactSection from "@/components/landing/ContactSection";
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
        <ModulesSection />
        <FlowSection />
        <FeaturesGridSection />
        <TechnologySection />
        <DesignerTypesSection />
        <ContactSection />
        <FAQSection />
        <FinalPushSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
