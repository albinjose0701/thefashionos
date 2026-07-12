import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22, mass: 0.4 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });
  const opacity = useMotionValue(0);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      opacity.set(1);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const magnetic = target?.closest?.("[data-cursor='magnetic']");
      const view = target?.closest?.("[data-cursor='view']");
      if (magnetic || view) {
        scale.set(2.4);
        if (labelRef.current) {
          labelRef.current.textContent = view ? "View" : "";
        }
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest?.("[data-cursor]")) return;
      scale.set(1);
      if (labelRef.current) labelRef.current.textContent = "";
    };

    const onLeave = () => opacity.set(0);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [dotX, dotY, opacity, scale]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-difference hidden md:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          scale,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center">
          <span
            ref={labelRef}
            className="text-[9px] uppercase tracking-widest text-white font-body"
          />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
