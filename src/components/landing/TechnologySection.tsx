import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-dark text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-6 font-body">
              For the Curious
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-8">
              Generative AI trained on{" "}
              <span className="text-gradient-gold">fashion</span>, not just images
            </h2>
            
            <p className="text-lg md:text-xl text-cream/70 leading-relaxed font-body mb-8">
              Our models understand garment construction, textile behavior, color theory, 
              and fashion history. We've trained on decades of runway shows, editorial spreads, 
              and design archives—then fine-tuned for practical application in real design workflows.
            </p>

            <p className="text-xl font-display italic text-cream/90">
              This isn't just image generation. It's fashion intelligence.
            </p>
          </motion.div>

          {/* Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "Silhouette Recognition",
              "Color Theory",
              "Textile Analysis",
              "Trend Prediction",
              "Style Transfer",
              "Collection Logic",
              "Seasonal Context",
              "Market Awareness",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-4 py-3 rounded-xl bg-cream/5 border border-cream/10 text-sm text-cream/80 font-body"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
