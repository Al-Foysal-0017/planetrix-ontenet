"use client"
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="relative h-[900vh] bg-blac"
    style={{
        background: 'linear-gradient(120.56deg, #1D2948 -2.28%, #141D33 21.31%, #0F1628 33.91%, #050A16 92.75%)',
        backgroundAttachment: 'fixed' // Jate scroll korle gradient-ti shore na jay
      }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Scene scrollYProgress={scrollYProgress} />
      </div>
    </main>
  );
}