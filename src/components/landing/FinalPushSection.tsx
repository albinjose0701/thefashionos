import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalPushSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToWaitlist = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
            The future of fashion design is{" "}
            <span className="text-gradient-hero">intelligent</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-body max-w-3xl mx-auto">
            For too long, designers have been forced to choose between creative freedom 
            and practical tools. Between inspiration and organization. Between artistic 
            vision and market awareness.
            <br /><br />
            <span className="text-foreground font-medium">
              We're building the workspace where none of those are trade-offs anymore.
            </span>
          </p>

          <Button variant="hero" size="xl" onClick={scrollToWaitlist}>
            Join the Movement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalPushSection;
