import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Image, Environment } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const shots = [
  { src: "/images/image3.png", position: [-2.4, 0.9, 0] as [number, number, number], rot: [0.08, 0.35, -0.06] as [number, number, number] },
  { src: "/images/image4.png", position: [0.1, 0.2, 0.4] as [number, number, number], rot: [0.02, -0.1, 0.02] as [number, number, number] },
  { src: "/images/image5.png", position: [2.5, -0.5, -0.2] as [number, number, number], rot: [-0.05, -0.4, 0.08] as [number, number, number] },
  { src: "/images/image2.png", position: [-1.8, -1.3, -0.6] as [number, number, number], rot: [0.1, 0.25, 0.05] as [number, number, number] },
  { src: "/images/image6.png", position: [1.9, 1.4, -0.8] as [number, number, number], rot: [-0.08, -0.2, -0.04] as [number, number, number] },
];

function TiltGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const [target] = useState(() => ({ x: 0, y: 0 }));

  useFrame((state) => {
    if (!group.current) return;
    target.x = state.pointer.y * 0.25;
    target.y = state.pointer.x * 0.35;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.x, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.y, 0.05);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return <group ref={group}>{children}</group>;
}

function FloatingShot({
  src,
  position,
  rot,
}: {
  src: string;
  position: [number, number, number];
  rot: [number, number, number];
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
      <Image
        url={src}
        position={position}
        rotation={rot}
        scale={[2.2, 1.4]}
        toneMapped={false}
        transparent
        opacity={0.95}
      />
    </Float>
  );
}

function GalleryScene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <Environment preset="city" />
      <TiltGroup>
        {shots.map((shot) => (
          <FloatingShot key={shot.src} {...shot} />
        ))}
      </TiltGroup>
    </>
  );
}

const Showcase3DSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="platform">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4 font-body">
            3D product space
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Move through the{" "}
            <span className="text-gradient-hero italic">workspace</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Drag your cursor — screens float in depth. Moodboards, catalogs, and design tools in one living scene.
          </p>
        </motion.div>
      </div>

      <div className="relative h-[420px] md:h-[560px] w-full">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 6.2], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <GalleryScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {["Moodboards", "Designboards", "Catalogs", "Silhouettes"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="text-center py-3 border border-border/60 bg-card/60 backdrop-blur-sm font-body text-sm text-muted-foreground"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase3DSection;
