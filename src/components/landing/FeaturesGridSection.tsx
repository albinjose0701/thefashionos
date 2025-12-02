import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointer, Brain, Cloud } from "lucide-react";

const features = [
  {
    icon: MousePointer,
    title: "Visual-First Interface",
    description: "Drag images anywhere. Paste inspiration directly into your workspace. Create mood boards as intuitively as you'd arrange physical fabric swatches.",
  },
  {
    icon: Brain,
    title: "Contextual AI",
    description: 'The more you work, the better it understands your aesthetic. Your AI copilot learns what "romantic but architectural" means to YOU.',
  },
  {
    icon: Cloud,
    title: "Seamless Memory",
    description: "Return to any project and pick up exactly where you left off. Your vibe, preferences, and creative history—always in sync.",
  },
];

const FeaturesGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Built for how designers{" "}
            <span className="italic text-muted-foreground">actually work</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            No more creative context-switching
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-blue/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
