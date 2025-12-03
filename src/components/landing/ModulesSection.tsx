import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Radar, Layers, Grid3X3, Quote } from "lucide-react";

const modules = [
  {
    icon: Sparkles,
    title: "Moodboards",
    headline: "Capture the ephemeral",
    description: "Describe your inspiration, upload an image, or express a feeling. AI translates abstract concepts into visual mood—textures, colors, atmospheres that crystallize your vision.",
    example: '"90s minimalism meets Moroccan textiles, but make it cyberpunk"',
    exampleResult: "Curated moodboard",
    gradient: "from-gold/20 to-gold-light/10",
    accentColor: "gold",
  },
  {
    icon: Radar,
    title: "Trendboards",
    headline: "Research while you create",
    description: "AI scans current collections, street style, and emerging patterns—then synthesizes what matters for your aesthetic direction.",
    example: '"Where is oversized tailoring heading for Fall 2025?"',
    exampleResult: "Relevant trend directions",
    gradient: "from-blue/20 to-blue-light/10",
    accentColor: "blue",
  },
  {
    icon: Layers,
    title: "Designboards",
    headline: "Vision meets direction",
    description: "Blend moodboards and trendboards into concrete design direction. Refine silhouettes, explore palettes, develop cohesive visual languages.",
    example: '"Mix cyberpunk mood with tailoring trends"',
    exampleResult: "Design direction with style references",
    gradient: "from-gold/15 to-blue/15",
    accentColor: "gold",
  },
  {
    icon: Grid3X3,
    title: "Product Catalogs",
    headline: "Concept to collection",
    description: "Generate production-ready visuals, technical flats, and complete catalog layouts. Your entire collection story—organized and visualized.",
    example: '"Create a 15-piece capsule from this direction"',
    exampleResult: "Complete catalog",
    gradient: "from-blue/20 to-gold/10",
    accentColor: "blue",
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
            Four Intelligent{" "}
            <span className="text-gradient-hero italic">Workspaces</span>
          </h2>
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

              {/* Enhanced Example Prompt Box */}
              <div className={`p-5 rounded-xl bg-card border-2 ${module.accentColor === 'gold' ? 'border-gold/40' : 'border-blue/40'} shadow-lg`}>
                <div className="flex items-start gap-3 mb-3">
                  <Quote className={`w-5 h-5 ${module.accentColor === 'gold' ? 'text-gold' : 'text-blue'} flex-shrink-0 mt-0.5`} />
                  <p className={`text-base font-medium ${module.accentColor === 'gold' ? 'text-gold' : 'text-blue'} font-body italic`}>
                    {module.example}
                  </p>
                </div>
                <div className="ml-8 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">→</span>
                  <p className="text-sm text-foreground/70 font-body">
                    {module.exampleResult}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
