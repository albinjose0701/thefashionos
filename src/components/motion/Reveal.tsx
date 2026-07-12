import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export const Reveal = ({ children, className = "", delay = 0, y = 48 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type RevealTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
};

export const RevealText = ({
  text,
  className = "",
  as = "h2",
  delay = 0,
}: RevealTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden mr-[0.28em] align-bottom"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%", rotate: 4 }}
              animate={isInView ? { y: "0%", rotate: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: delay + i * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
};
