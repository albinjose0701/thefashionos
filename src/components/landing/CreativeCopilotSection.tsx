import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CreativeCopilotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-dark text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
              An AI that understands{" "}
              <span className="text-gradient-gold">fashion</span>, not just images
            </h2>
            
            <p className="text-lg md:text-xl text-cream/70 leading-relaxed max-w-3xl mx-auto mb-16 font-body">
              Our Fashion Operating System doesn't just generate pretty pictures. It understands 
              silhouettes, draping, color theory, seasonal trends, and the abstract language 
              designers speak. It's trained on fashion, thinks in collections, and works at 
              the speed of inspiration.
            </p>
          </motion.div>

          {/* AI Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Neural Network Visual */}
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {/* Connections */}
                {[...Array(12)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={50 + (i % 4) * 30}
                    y1={50 + Math.floor(i / 4) * 50}
                    x2={250 + (i % 3) * 50}
                    y2={60 + Math.floor(i / 3) * 40}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.1 * i }}
                  />
                ))}
                
                {/* Input Nodes (Fashion Elements) */}
                {[
                  { x: 40, y: 40, label: "Silhouette" },
                  { x: 40, y: 80, label: "Color" },
                  { x: 40, y: 120, label: "Texture" },
                  { x: 40, y: 160, label: "Mood" },
                ].map((node, i) => (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                  >
                    <circle cx={node.x} cy={node.y} r="8" fill="hsl(42, 100%, 50%)" opacity="0.8" />
                    <text x={node.x + 15} y={node.y + 4} fill="currentColor" fontSize="10" className="font-body">
                      {node.label}
                    </text>
                  </motion.g>
                ))}

                {/* Output Nodes */}
                {[
                  { x: 360, y: 60, label: "Moodboard" },
                  { x: 360, y: 100, label: "Trends" },
                  { x: 360, y: 140, label: "Collection" },
                ].map((node, i) => (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + 0.2 * i }}
                  >
                    <circle cx={node.x} cy={node.y} r="8" fill="hsl(220, 84%, 50%)" opacity="0.8" />
                    <text x={node.x - 60} y={node.y + 4} fill="currentColor" fontSize="10" className="font-body">
                      {node.label}
                    </text>
                  </motion.g>
                ))}

                {/* Central AI Node */}
                <motion.circle
                  cx="200"
                  cy="100"
                  r="24"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.text
                  x="200"
                  y="104"
                  fill="currentColor"
                  fontSize="12"
                  textAnchor="middle"
                  className="font-display"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  AI
                </motion.text>

                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(42, 100%, 50%)" />
                    <stop offset="100%" stopColor="hsl(220, 84%, 50%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCopilotSection;
