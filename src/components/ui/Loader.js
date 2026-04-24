"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // ✅ runs ONLY on client
    const generatedStars = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050A16] overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative flex flex-col items-center gap-10">

        {/* Planet */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 shadow-[0_0_60px_rgba(59,130,246,0.7)]"
        />

        {/* Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute w-40 h-40 border border-white/20 rounded-full flex items-start justify-center"
        >
          <div className="w-4 h-4 bg-white rounded-full mt-[-8px]" />
        </motion.div>

        {/* ⭐ Stars (client only render) */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${star.width}px`,
                height: `${star.height}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white tracking-[0.4em] uppercase text-xs"
        >
          Loading Planetrix...
        </motion.p>
      </div>
    </div>
  );
}