import { motion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
  dark?: boolean;
};

const Marquee = ({
  items,
  speed = 35,
  className = "",
  reverse = false,
  dark = false,
}: MarqueeProps) => {
  const row = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y ${
        dark
          ? "border-cream/10 bg-charcoal"
          : "border-border/50 bg-card/40 backdrop-blur-sm"
      } ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap py-4 md:py-5"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`mx-6 md:mx-10 font-display text-xl md:text-3xl inline-flex items-center gap-6 md:gap-10 ${
              dark ? "text-cream/85" : "text-foreground/80"
            }`}
          >
            {item}
            <span
              className={`w-2 h-2 rounded-full bg-gradient-to-r from-gold to-blue inline-block shrink-0 ${
                dark ? "opacity-90" : ""
              }`}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
