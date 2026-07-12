import { lazy, Suspense } from "react";
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
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Marquee from "@/components/motion/Marquee";

const AmbientScene3D = lazy(() => import("@/components/landing/AmbientScene3D"));
const Showcase3DSection = lazy(() => import("@/components/landing/Showcase3DSection"));
const CinematicGallerySection = lazy(() => import("@/components/landing/CinematicGallerySection"));

const marqueeItems = [
  "Moodboards",
  "Trendboards",
  "Designboards",
  "Product Catalogs",
  "Silhouette Studio",
  "Brand Library",
  "AI Copilot",
  "Collection Logic",
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />

      <Suspense fallback={null}>
        <AmbientScene3D />
      </Suspense>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />

          <Marquee items={marqueeItems} speed={40} />

          <CreativeChallengeSection />
          <ModulesSection />

          <Suspense
            fallback={
              <div className="py-24 text-center text-muted-foreground font-body">
                Loading gallery…
              </div>
            }
          >
            <CinematicGallerySection />
          </Suspense>

          <Marquee
            items={[
              "Design faster",
              "Think in collections",
              "Ship with clarity",
              "Fashion OS",
              "From mood to market",
            ]}
            speed={28}
            reverse
            dark
          />

          <Suspense fallback={null}>
            <Showcase3DSection />
          </Suspense>

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
    </div>
  );
};

export default Index;
