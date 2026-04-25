"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sub-component for the Planet + Orbit logic
const PlanetSystem = ({ size = 1, duration = 6, color = "from-blue-400 to-blue-700" }) => (
  <div className="relative flex items-center justify-center" style={{ transform: `scale(${size})` }}>
    {/* Planet */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-20 h-20 rounded-full bg-gradient-to-br ${color} shadow-[0_0_60px_rgba(59,130,246,0.4)]`}
    />

    {/* Orbit */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
      className="absolute w-40 h-40 border border-white/10 rounded-full flex items-start justify-center"
    >
      <div className="w-4 h-4 bg-white/80 rounded-full mt-[-8px] shadow-[0_0_10px_white]" />
    </motion.div>
  </div>
);

export default function Loader() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 30 }).map(() => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="bg-[#050A16 fixed inset-0 z-[999] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />

      {/* Main Container */}
      <div className="relative flex flex-col items-center gap-16">
        
        {/* Trio Planet System */}
        <div className="flex items-center justify-center gap-12 md:gap-24">
          
          {/* Left Planet (Small) */}
          <div className="opacity-40 blur-[1px] hidden sm:block">
            <PlanetSystem size={0.4} duration={8} color="from-indigo-500 to-purple-700" />
          </div>

          {/* Center Planet (Large) */}
          <PlanetSystem size={1} duration={6} />

          {/* Right Planet (Small) */}
          <div className="opacity-40 blur-[1px] hidden sm:block">
            <PlanetSystem size={0.4} duration={10} color="from-cyan-400 to-blue-600" />
          </div>
        </div>

        {/* ⭐ Stars Background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ repeat: Infinity, duration: 3, delay: star.delay }}
              className="absolute bg-white rounded-full"
              style={{
                width: `${star.width}px`,
                height: `${star.height}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
              }}
            />
          ))}
        </div>

        {/* Text Area */}
        <div className="flex flex-col items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white tracking-[0.5em] font-light uppercase text-[10px] md:text-xs"
            >
              Loading Planetrix...
            </motion.p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      </div>
    </div>
  );
}