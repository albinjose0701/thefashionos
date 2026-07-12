import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxMedia = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  return (
    <div ref={ref} data-cursor="view" className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="block w-full h-full object-cover will-change-transform"
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxMedia;
