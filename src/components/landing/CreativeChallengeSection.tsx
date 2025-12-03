import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Sparkles, X, FolderOpen, Globe, Image } from "lucide-react";

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
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 whitespace-nowrap">
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

            {/* Visual Split - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Chaotic State - Enhanced */}
              <motion.div 
                className="relative p-6 rounded-2xl bg-card border-2 border-destructive/30 overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5" />
                <div className="relative space-y-4">
                  {/* Browser tabs chaos */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-5 bg-muted-foreground/30 rounded-t flex items-center justify-center px-1"
                        style={{ width: `${Math.random() * 30 + 25}px` }}
                      >
                        <X className="w-2 h-2 text-muted-foreground/50" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Scattered folders and images */}
                  <div className="relative h-24">
                    <FolderOpen className="w-6 h-6 text-muted-foreground/40 absolute top-0 left-2 rotate-[-8deg]" />
                    <Globe className="w-5 h-5 text-muted-foreground/30 absolute top-2 right-4 rotate-[12deg]" />
                    <Image className="w-7 h-7 text-muted-foreground/35 absolute bottom-2 left-8 rotate-[5deg]" />
                    <FolderOpen className="w-5 h-5 text-muted-foreground/25 absolute bottom-0 right-2 rotate-[-15deg]" />
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-dashed border-muted-foreground/20 rounded" />
                  </div>
                  
                  <Layers className="w-10 h-10 text-destructive/50 mx-auto" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-destructive/80 font-body">Scattered & Chaotic</p>
                    <p className="text-xs text-muted-foreground mt-1">Lost inspiration</p>
                  </div>
                </div>
              </motion.div>

              {/* Organized Flow - Enhanced */}
              <motion.div 
                className="relative p-6 rounded-2xl bg-card border-2 border-gold/50 overflow-hidden shadow-xl shadow-gold/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-blue/10" />
                <div className="relative space-y-4">
                  {/* Unified flow bars */}
                  <div className="space-y-2">
                    <motion.div 
                      className="h-3 bg-gradient-to-r from-gold/60 to-gold/40 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                    <motion.div 
                      className="h-3 bg-gradient-to-r from-gold/40 to-blue/50 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "85%" } : {}}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.div 
                      className="h-3 bg-gradient-to-r from-blue/50 to-blue/60 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "70%" } : {}}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                  
                  {/* Organized grid */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i} 
                        className="aspect-square rounded-lg bg-gradient-to-br from-gold/30 to-blue/30 border border-gold/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                      />
                    ))}
                  </div>
                  
                  <Sparkles className="w-10 h-10 text-gold mx-auto" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gold font-body">Fluid & Organized</p>
                    <p className="text-xs text-foreground/70 mt-1">Creative flow preserved</p>
                  </div>
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
