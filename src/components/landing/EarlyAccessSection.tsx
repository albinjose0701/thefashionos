import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const benefits = [
  "Priority access when we launch",
  "Influence product development with your feedback",
  "Free access through beta period",
  "Direct line to our founding team",
  "Exclusive community of forward-thinking designers",
];

const EarlyAccessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "You're on the list!",
      description: "We'll be in touch within 48 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section ref={ref} id="early-access" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Be among the first to design with{" "}
                <span className="text-gradient-hero">AI</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
                We're launching with a limited beta for designers who want to shape 
                the future of fashion technology. Early access members get:
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground font-body"
                  >
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gold-dark" />
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-body">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-body">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium mb-2 font-body">
                    Instagram / Portfolio{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    placeholder="@handle or URL"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="excitement" className="block text-sm font-medium mb-2 font-body">
                    What excites you most about AI in fashion?
                  </label>
                  <Textarea
                    id="excitement"
                    name="excitement"
                    placeholder="Tell us what you're hoping to create..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Early Access"}
                </Button>

                <p className="text-xs text-center text-muted-foreground font-body">
                  We'll be in touch within 48 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
