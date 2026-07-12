import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Magnetic from "@/components/motion/Magnetic";
import { RevealText } from "@/components/motion/Reveal";

const PLATFORM_URL = "https://platform.thefashionos.com/";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroBg}
          alt="Fashion fabric background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-8 font-body"
          >
            Introducing
          </motion.p>

          <RevealText
            as="h1"
            text="The Fashion OS"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-xl md:text-2xl text-foreground/90 mb-6 italic drop-shadow-sm"
          >
            From inspiration to collection—powered by AI that thinks like a designer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 font-body leading-relaxed drop-shadow-sm"
          >
            An intelligent creative workspace where mood becomes trend, trend becomes direction,
            and direction becomes your next collection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Magnetic>
              <Button variant="gold" size="xl" asChild>
                <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-8 text-sm text-muted-foreground font-body"
          >
            Launching Q2 2026
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-foreground/40 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
