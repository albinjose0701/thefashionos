import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const flowSteps = [
  { label: "Inspiration", sublabel: "abstract" },
  { label: "Moodboard", sublabel: "visual expression" },
  { label: "Trendboard", sublabel: "research & context" },
  { label: "Designboard", sublabel: "concrete direction" },
  { label: "Product Catalog", sublabel: "final collection" },
];

const annotations = [
  "Start anywhere. Move fluidly.",
  "Iterate in real-time.",
  "AI learns your aesthetic.",
  "Export at any stage.",
];

const FlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            How It{" "}
            <span className="text-gradient-hero italic">Works</span>
          </h2>
        </motion.div>

        {/* Flow Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden md:block relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
              <motion.path
                d="M 100 150 Q 250 80, 400 150 T 700 150 T 900 150"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(42, 100%, 50%)" />
                  <stop offset="100%" stopColor="hsl(220, 84%, 50%)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex justify-between items-center relative z-10 py-12">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    index === 0 ? "bg-gold" : 
                    index === flowSteps.length - 1 ? "bg-blue" : 
                    "bg-gradient-to-br from-gold/50 to-blue/50"
                  }`}>
                    <span className="text-charcoal font-display text-lg font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-medium mb-1">{step.label}</h4>
                  <p className="text-sm text-muted-foreground font-body italic">{step.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  index === 0 ? "bg-gold" : 
                  index === flowSteps.length - 1 ? "bg-blue" : 
                  "bg-gradient-to-br from-gold/50 to-blue/50"
                }`}>
                  <span className="text-charcoal font-display font-semibold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-lg font-medium">{step.label}</h4>
                  <p className="text-sm text-muted-foreground font-body italic">{step.sublabel}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="absolute left-6 mt-16 h-4 w-0.5 bg-gradient-to-b from-gold/30 to-blue/30" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Annotations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
          >
            {annotations.map((annotation, index) => (
              <span
                key={annotation}
                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground font-body"
              >
                {annotation}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
