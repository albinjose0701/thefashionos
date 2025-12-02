import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this going to replace designers?",
    answer: "Never. This is a tool for designers, not a replacement. Think of it as having a brilliant intern who never sleeps—it handles research, organization, and iteration so you can focus on the creative decisions only you can make.",
  },
  {
    question: "Do I own what I create?",
    answer: "100%. Everything generated in your workspace belongs to you. Use it commercially, modify it, share it—it's yours.",
  },
  {
    question: "Does it work with my existing workflow?",
    answer: "Yes. Export moodboards, designboards, and catalogs in formats you already use. We integrate with your existing tools, not replace them.",
  },
  {
    question: "How is this different from Midjourney or DALL-E?",
    answer: 'Those are image generators. We\'re a complete fashion design operating system. Our AI understands collections, seasons, trends, and the language of fashion—not just "pretty pictures." Plus, everything stays organized in one intelligent workspace.',
  },
  {
    question: "What if I'm not technical?",
    answer: "You don't need to be. If you can drag an image and describe what you're imagining, you can use this. We've designed it to feel as natural as having a conversation with a creative collaborator.",
  },
  {
    question: "When does this launch?",
    answer: "We're starting with a private beta in Q1 2025. Early access members will be first in line.",
  },
];

const FAQSection = () => {
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
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
            Questions we're already hearing
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
