import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Zap, TrendingUp, Calendar, ArrowRight } from "lucide-react";

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
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
              Design moves fast.{" "}
              <br className="sm:hidden" />
              <span className="text-muted-foreground italic">Your process shouldn't crawl.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                You spot a trend emerging on the streets of Seoul. By the time you've researched, 
                designed, and developed a collection around it—90 to 180 days later—the fashion 
                world has moved on.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                Current design cycles are too slow for a world where trends shift in weeks, not seasons. 
                Researching, ideating, and creating an entire collection from scratch is painstaking work. 
                And by the time your vision materializes, you're already chasing the next wave.
              </p>
              <p className="text-xl font-display italic text-foreground">
                What if your workspace moved at the speed of inspiration?
              </p>
            </motion.div>

            {/* Infographic - Timeline Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Traditional Timeline */}
              <motion.div 
                className="relative p-6 rounded-2xl bg-card border-2 border-destructive/30 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-destructive/70" />
                    <span className="text-sm font-semibold text-destructive/80 font-body uppercase tracking-wide">Traditional Process</span>
                  </div>
                  
                  {/* Timeline bar */}
                  <div className="relative mb-4">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-destructive/60 to-destructive/40 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Trend spotted</span>
                      <span>90-180 days</span>
                      <span>Launch</span>
                    </div>
                  </div>
                  
                  {/* Process steps */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
                    {["Research", "Ideation", "Design", "Sampling", "Production", "Launch"].map((step, i) => (
                      <div key={step} className="flex items-center">
                        <span className="px-1.5 sm:px-2 py-1 bg-muted/50 rounded text-[9px] sm:text-[10px]">{step}</span>
                        {i < 5 && <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 mx-0.5 sm:mx-1 text-muted-foreground/40" />}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm text-destructive/70">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body">Trend already passed by launch</span>
                  </div>
                </div>
              </motion.div>

              {/* Lal10 Timeline */}
              <motion.div 
                className="relative p-6 rounded-2xl bg-card border-2 border-gold/50 overflow-hidden shadow-xl shadow-gold/10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-blue/5" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-gold" />
                    <span className="text-sm font-semibold text-gold font-body uppercase tracking-wide">With Lal10</span>
                  </div>
                  
                  {/* Compressed timeline bar */}
                  <div className="relative mb-4">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-gold via-gold/80 to-blue/60 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "25%" } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-gold font-medium">Trend spotted</span>
                      <span className="text-gold font-medium">Days, not months</span>
                      <span className="text-muted-foreground">Ready to produce</span>
                    </div>
                  </div>
                  
                  {/* Streamlined process */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs">
                    {["Capture", "AI Research", "Design", "Catalog"].map((step, i) => (
                      <div key={step} className="flex items-center">
                        <span className="px-1.5 sm:px-2 py-1 bg-gold/20 rounded text-[9px] sm:text-[10px] text-gold font-medium">{step}</span>
                        {i < 3 && <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 mx-0.5 sm:mx-1 text-gold/60" />}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm text-gold">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-body font-medium">Catch trends while they're still rising</span>
                  </div>
                </div>
              </motion.div>

              {/* Speed comparison stat */}
              <motion.div 
                className="flex items-center justify-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-destructive/70">90-180</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">days traditional</div>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-gold">10x</div>
                  <div className="text-[10px] sm:text-xs text-gold/70">faster with Lal10</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeChallengeSection;
