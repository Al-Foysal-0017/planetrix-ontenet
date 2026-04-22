// "use client"
// import { PLANETS } from "@/constants/planetsData";
// import { useTransform, motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// export default function PlanetInfo({ scrollYProgress }) {
//   const [index, setIndex] = useState(0);

//   // Scroll er progression (0 to 1) ke planet index (0 to 8) e convert kora
//   useTransform(scrollYProgress, (value) => {
//     const newIndex = Math.round(value * (PLANETS.length - 1));
//     if (newIndex !== index) setIndex(newIndex);
//   });

//   const planet = PLANETS[index];

//   return (
//     <>
//     <Navbar/>
//     <div className="mt-40 absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-between text-white">
//       {/* Top Section: Planet Name and Stats */}
//       <div className="w-full max-w-308 px-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={planet.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="flex flex-col items-center"
//           >
//             {/* Planet Name */}
//             <h1 className="text-[48px] text-white/80 font-bold tracking-[0.3em mb- uppercase text-center">
//               {planet.name}
//             </h1>

//             {/* Stats Grid */}
//             <div className=" grid grid-cols-4 gap-1 lg:gap-1 w-full pt-4">
//               <Stat label="Galaxy" value="Milky Way" />
//               <Stat label="Diameter" className="" value={planet.diameter} />
//               <Stat label="Length of Day" value={planet.day} />
//               <Stat label="Avg Temperature" value={planet.temp} />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Bottom Section: Branding & Footer-like info */}
//       <Footer/>
//     </div>
//     </>
//   );
// }

// // Choto Reusable Stat Component
// function Stat({ label, value }) {
//   return (
//     <div className="flex flex-col items-center text-center">
//       <p style={{color:"#BDC5E2"}} className="font-bold text-[30px]  uppercase tracking-[0.2em mb-2">
//         {label}
//       </p>
//       <p className="text-[20px] lg:text-xl font-light tracking-wide uppercase">
//         {value}
//       </p>
//     </div>
//   );
// }







// "use client"
// import { PLANETS } from "@/constants/planetsData";
// import { useTransform, motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// export default function PlanetInfo({ scrollYProgress }) {
//   const [index, setIndex] = useState(0);

//   useTransform(scrollYProgress, (value) => {
//     const newIndex = Math.round(value * (PLANETS.length - 1));
//     if (newIndex !== index) setIndex(newIndex);
//   });

//   const planet = PLANETS[index];

//   return (
//     <>
//       <Navbar />
//       <div className="mt-[clamp(80px,10vh,150px)] absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-between text-white">
        
//         {/* Top Section: Planet Name and Stats */}
//         <div className="px-10 w-full max-w-308">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={planet.id}
//               initial={{ opacity: 0, y: "2vh" }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: "-2vh" }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="flex flex-col items-center"
//             >
//               {/* Planet Name - Responsive size based on viewport */}
//               <h1 className="text-[clamp(2rem,3vw,5rem)] bg-[linear-gradient(101.23deg,#EDEDED_24.07%,#B6B6B6_96.8%)] bg-clip-text text-transparent font-bold tracking-[0.3em mb-[1.5vh] uppercase text-center">
//                 {planet.name}
//               </h1>

//               {/* Stats Grid - Fluid gap and padding */}
//               {/* <div className="pt-[2vh border grid grid-cols-4 gap-[2vw] w-full"> */}
//               <div className="flex justify-between gap-[2vw] w-full">
//                 <Stat label="Galaxy" value="Milky Way" />
//                 <Stat label="Diameter" value={planet.diameter} />
//                 <Stat label="Length of Day" value={planet.day} />
//                 <Stat label="Avg Temperature" value={planet.temp} />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Bottom Section: Branding & Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// }

// // Space gulo soriye underscore (_) babohar kora hoyeche
// function Stat({ label, value }) {
//   return (
//     <div className="flex flex-col items-center text-center">
//       {/* Label - Space soriye underscore babohar kora hoyeche */}
//       <p 
//         style={{ color: "#BDC5E2" }} 
//         className="mb-[0.5vh font-bold text-[clamp(0.6rem,2vw,2rem)] text-[30px  uppercase"
//       >
//         {label}
//       </p>
      
//       {/* Value - clamp er bhetore space rakha jabe na */}
//       <p className="text-[clamp(0.8rem,1.3vw,1.3rem)] text-[20px font-light tracking-wide">
//         {value}
//       </p>
//     </div>
//   );
// }





"use client"
import { PLANETS } from "@/constants/planetsData";
import { useTransform, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PlanetInfo({ scrollYProgress }) {
  const [index, setIndex] = useState(0);

  useTransform(scrollYProgress, (value) => {
    const newIndex = Math.round(value * (PLANETS.length - 1));
    if (newIndex !== index) setIndex(newIndex);
  });

  const planet = PLANETS[index];

  return (
    <>
      <Navbar />
      <div className="mt-[clamp(80px,10vh,150px)] absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-between text-white">
        
        {/* Top Section: Planet Name and Stats */}
        <div className="px-10 w-full max-w-240">
          <AnimatePresence mode="wait">
            <motion.div
              key={planet.id}
              initial={{ opacity: 0, y: "2vh" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-2vh" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Planet Name - Responsive size based on viewport */}
              <h1 className="text-[clamp(2rem,2vw,4rem)] bg-[linear-gradient(101.23deg,#EDEDED_24.07%,#B6B6B6_96.8%)] bg-clip-text text-transparent font-bold tracking-[0.3em mb-[1.5vh] uppercase text-center">
                {planet.name}
              </h1>

              {/* Stats Grid - Fluid gap and padding */}
              {/* <div className="pt-[2vh border grid grid-cols-4 gap-[2vw] w-full"> */}
              <div className="flex justify-between gap-[2vw] w-full">
                <Stat label="Galaxy" value="Milky Way" />
                <Stat label="Diameter" value={planet.diameter} />
                <Stat label="Length of Day" value={planet.day} />
                <Stat label="Avg Temperature" value={planet.temp} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section: Branding & Footer */}
        <Footer />
      </div>
    </>
  );
}

// Space gulo soriye underscore (_) babohar kora hoyeche
function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Label - Space soriye underscore babohar kora hoyeche */}
      <p 
        style={{ color: "#BDC5E2" }} 
        className="font-bold text-[clamp(0.6rem,1.5vw,1.5rem)]  uppercase"
      >
        {label}
      </p>
      
      {/* Value - clamp er bhetore space rakha jabe na */}
      <p className="text-[clamp(0.8rem,1.1vw,1.1rem)] font-light tracking-wide">
        {value}
      </p>
    </div>
  );
}