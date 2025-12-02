import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scenarios = [
  {
    text: "Indie designers use it to research trends and create professional presentations for buyers—work that used to take a team.",
  },
  {
    text: "Design directors use it to rapidly explore multiple collection directions before committing resources to sampling.",
  },
  {
    text: "Fashion students use it to learn trend forecasting and develop portfolios that show both creativity and market awareness.",
  },
];

const DesignerTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            For every type of{" "}
            <span className="text-gradient-hero italic">designer</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 font-body">
            Whether you're solo or leading a team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border/50"
            >
              <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed">
                {scenario.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerTypesSection;
