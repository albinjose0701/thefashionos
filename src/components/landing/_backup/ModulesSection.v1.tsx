import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Radar, Layers, Grid3X3 } from "lucide-react";

const modules = [
  {
    icon: Sparkles,
    title: "Moodboards",
    headline: "Capture the Ephemeral",
    description: "Describe your inspiration in words, upload a single image, or simply express a feeling. Our AI translates abstract concepts into visual mood—textures, colors, atmospheres that crystallize your vision.",
    example: '"90s minimalism meets Moroccan textiles, but make it cyberpunk" → AI generates a curated moodboard',
    gradient: "from-gold/20 to-gold-light/10",
  },
  {
    icon: Radar,
    title: "Trendboards",
    headline: "Research While You Create",
    description: "Stop losing hours to trend research. Our AI scans current collections, street style, and emerging patterns across the fashion landscape—then synthesizes what matters for your aesthetic direction.",
    example: '"Show me where oversized tailoring is heading for Fall 2025" → AI curates relevant trend directions',
    gradient: "from-blue/20 to-blue-light/10",
  },
  {
    icon: Layers,
    title: "Designboards",
    headline: "Where Vision Meets Direction",
    description: "Blend your moodboards and trendboards into concrete design direction. The AI helps you refine silhouettes, explore color palettes, and develop cohesive visual languages for your collection.",
    example: '"Mix the cyberpunk mood with tailoring trends" → AI generates design direction with style references',
    gradient: "from-gold/15 to-blue/15",
  },
  {
    icon: Grid3X3,
    title: "Product Catalogs",
    headline: "From Concept to Collection",
    description: "Generate production-ready product visuals, technical flats, and complete catalog layouts. Your entire collection story—from hero pieces to supporting styles—organized and visualized.",
    example: '"Create a 15-piece capsule collection based on this design direction" → AI generates complete catalog',
    gradient: "from-blue/20 to-gold/10",
  },
];

const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32" id="modules">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            From vibe to collection{" "}
            <span className="text-gradient-hero italic">in four acts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Your Complete Design Stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${module.gradient} border border-border/50 hover:border-border transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-card shadow-sm">
                  <module.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider font-body">
                    {module.title}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium mt-1">
                    {module.headline}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                {module.description}
              </p>

              <div className="p-4 rounded-xl bg-card/80 border border-border/30">
                <p className="text-sm italic text-foreground/80 font-body">
                  {module.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
