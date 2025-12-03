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
              Fashion Intelligence,{" "}
              <span className="text-gradient-gold">Not Just Image Generation</span>
            </h2>
            
            <p className="text-lg md:text-xl text-cream/70 leading-relaxed font-body mb-8">
              Our models understand garment construction, textile behavior, color theory, 
              and fashion history. Trained on decades of runway shows and design archives, 
              fine-tuned for real design workflows.
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
              "Silhouette recognition",
              "Color theory",
              "Textile analysis",
              "Trend prediction",
              "Style transfer",
              "Collection logic",
              "Seasonal context",
              "Market awareness",
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
