// "use client"
// import { useRef } from "react";
// import { useScroll } from "framer-motion";
// import Scene from "@/components/canvas/Scene";

// export default function Home() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   return (
//     <main ref={containerRef} className="relative h-[900vh] bg-blac"
//     style={{
//         background: 'linear-gradient(120.56deg, #1D2948 -2.28%, #141D33 21.31%, #0F1628 33.91%, #050A16 92.75%)',
//         backgroundAttachment: 'fixed' // Jate scroll korle gradient-ti shore na jay
//       }}>
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
//         <Scene scrollYProgress={scrollYProgress} />
//       </div>
//     </main>
//   );
// }



"use client"
import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  const containerRef = useRef(null);
  const [showNotification, setShowNotification] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    // ১০ সেকেন্ড পর নোটিফিকেশনটি চলে যাবে
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main ref={containerRef} className="relative h-[900vh]"
      style={{
        background: 'linear-gradient(120.56deg, #1D2948 -2.28%, #141D33 21.31%, #0F1628 33.91%, #050A16 92.75%)',
        backgroundAttachment: 'fixed' 
      }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Scene scrollYProgress={scrollYProgress} />
      </div>

      {/* Notification: Right Center, White BG, Black Text */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
          >
            {/* White Capsule Box */}
            <div className="bg-white px-4 py-8 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.3)] flex flex-col items-center gap-4 border border-white/20">
              <span className="text-black font-bold tracking-[0.2em] uppercase text-[10px] [writing-mode:vertical-lr] rotate-180">
                Scroll Up
              </span>

              {/* তীর চিহ্ন উপরের দিকে নির্দেশ করছে */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-black text-xl font-bold"
              >
                ↑
              </motion.div>
            </div>

            {/* Vertical Line for style (এখন নিচ থেকে উপরের দিকে) */}
            <div className="h-12 w-[1px] bg-gradient-to-t from-white to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}