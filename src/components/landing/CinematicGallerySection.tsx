import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ParallaxMedia from "@/components/motion/ParallaxMedia";

const rows = [
  {
    src: "/images/image3.png",
    label: "01 — Moodboards",
    title: "Capture the ephemeral",
    copy: "Abstract inspiration becomes texture, color, and atmosphere.",
  },
  {
    src: "/images/image4.png",
    label: "02 — Designboards",
    title: "Direction with market pulse",
    copy: "Blend mood with live trend signals beside your board.",
  },
  {
    src: "/images/image5.png",
    label: "03 — Catalogs",
    title: "Buyer-ready clarity",
    copy: "Front, back, side — production visuals without leaving flow.",
  },
  {
    src: "/images/image6.png",
    label: "04 — Silhouettes",
    title: "Shape before you generate",
    copy: "Lock the cut, then explore styles that match your direction.",
  },
  {
    src: "/images/image2.png",
    label: "05 — Brands",
    title: "Every collection, one home",
    copy: "Organize seasons and archives without losing your aesthetic thread.",
  },
  {
    src: "/images/image1.png",
    label: "06 — Dashboard",
    title: "Creative ops, visible",
    copy: "Credits, boards, and team activity in one intelligent view.",
  },
];

const StickyRow = ({
  item,
  index,
}: {
  item: (typeof rows)[number];
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.35, 1, 1, 0.35]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [40, -40] : [-40, 40]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center py-16 md:py-24 ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div style={{ x }} className="space-y-4 px-1">
        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground font-body">
          {item.label}
        </p>
        <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-md">
          {item.copy}
        </p>
      </motion.div>
      <ParallaxMedia
        src={item.src}
        alt={item.title}
        className="aspect-[16/10] w-full shadow-2xl shadow-charcoal/15"
      />
    </motion.div>
  );
};

const CinematicGallerySection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-10 md:py-16 overflow-hidden" id="platform">
      <div className="container mx-auto px-6 mb-8 md:mb-12 text-center">
        <motion.h2
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight"
        >
          Selected surfaces from{" "}
          <span className="text-gradient-hero italic">Fashion OS</span>
        </motion.h2>
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        {rows.map((item, index) => (
          <StickyRow key={item.src} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CinematicGallerySection;
