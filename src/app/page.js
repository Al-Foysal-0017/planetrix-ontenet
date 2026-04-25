"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Scene from "@/components/canvas/Scene";
import Loader from "@/components/ui/Loader";
import useImagePreload from "@/hooks/useImagePreload";
import { PLANETS } from "@/constants/planetsData";

export default function Home() {
  const containerRef = useRef(null);
  const [showNotification, setShowNotification] = useState(true);

  // 🔥 Get all planet image URLs
  const imageUrls = PLANETS.map((p) => p.img);

  // 🔥 preload images
  const isLoaded = useImagePreload(imageUrls);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {!isLoaded && <Loader />}

      <main
        ref={containerRef}
        className="relative h-[900vh]"
        style={{
          background:
            "linear-gradient(120.56deg, #1D2948 -2.28%, #141D33 21.31%, #0F1628 33.91%, #050A16 92.75%)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Scene scrollYProgress={scrollYProgress} />
        </div>

        {/* Notification */}
        <AnimatePresence>
          {showNotification && isLoaded && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              style={{ top: "45%" }}
              className="fixed right-8 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
            >
              <div className="h-12 w-px bg-white/50" />

              <div className="bg-white px-4 py-8 rounded-full flex flex-col items-center gap-4">
                <span className="text-black text-[10px] uppercase [writing-mode:vertical-lr] rotate-180">
                  Scroll Up
                </span>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-black text-xl"
                >
                  ↑
                </motion.div>
              </div>

              {/* ❌ Close Button */}
              <button
                onClick={() => setShowNotification(false)}
                className="bg-red-500 cursor-pointer text-white w-6 h-6 flex items-center justify-center rounded-full text-xs hover:bg-red-600 transition"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
