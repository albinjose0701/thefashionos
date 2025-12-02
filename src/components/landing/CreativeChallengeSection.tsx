import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Sparkles } from "lucide-react";

const CreativeChallengeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
              Design is fluid.{" "}
              <span className="text-muted-foreground italic">Your tools shouldn't box you in.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                You start with a feeling—a texture, a color from your morning coffee, 
                a glimpse of fabric at the market. But by the time you've opened five tabs, 
                downloaded references, and tried to organize your thoughts in rigid folders, 
                that creative spark is already fading.
              </p>
              <p className="text-xl font-display italic text-foreground">
                What if your workspace could flow with your creative process instead of fighting it?
              </p>
            </motion.div>

            {/* Visual Split */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Chaotic State */}
              <div className="relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent" />
                <div className="relative space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-3 bg-muted-foreground/20 rounded"
                        style={{ width: `${Math.random() * 40 + 20}px`, transform: `rotate(${Math.random() * 10 - 5}deg)` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-muted-foreground/10 rounded-sm"
                        style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                      />
                    ))}
                  </div>
                  <Layers className="w-8 h-8 text-muted-foreground/40 mx-auto mt-4" />
                  <p className="text-xs text-muted-foreground text-center font-body">Scattered & Chaotic</p>
                </div>
              </div>

              {/* Organized Flow */}
              <div className="relative p-6 rounded-2xl bg-card border border-gold/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-blue/5" />
                <div className="relative space-y-3">
                  <div className="h-2 bg-gold/40 rounded-full w-full" />
                  <div className="h-2 bg-blue/40 rounded-full w-4/5" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-gold/20 to-blue/20" />
                    ))}
                  </div>
                  <Sparkles className="w-8 h-8 text-gold mx-auto mt-4" />
                  <p className="text-xs text-foreground text-center font-body font-medium">Fluid & Organized</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeChallengeSection;
