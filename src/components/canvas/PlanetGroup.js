// "use client"
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Decal, useTexture, Html } from "@react-three/drei";
// import { PLANETS } from "@/constants/planetsData";
// import * as THREE from "three";

// export default function PlanetGroup({ scrollYProgress }) {
//   const groupRef = useRef([]);
//   const nameRefs = useRef([]);
//   const textures = useTexture(PLANETS.map(p => p.img));

//   useFrame((state, delta) => {
//     PLANETS.forEach((_, index) => {
//       const item = groupRef.current[index];
//       const nameLabel = nameRefs.current[index];
//       if (!item) return;

//       const progress = scrollYProgress.get();
//       const center = index / (PLANETS.length - 1);
//       const diff = progress - center;
//       const distFromCenter = Math.abs(diff);

//       // Positioning Logic (Apnar deya agar logic onujayi)
//       const x = diff * -45; 
//       const y = 0.5; 
//       const scale = THREE.MathUtils.lerp(2, 0.4, Math.min(distFromCenter * 4, 1));
//       const z = THREE.MathUtils.lerp(0, -10, Math.min(distFromCenter * 4, 1));

//       item.position.set(x, y, z);
//       item.scale.setScalar(scale);

//       // Rotation logic
//       if (item.children[0]) {
//         item.children[0].rotation.z -= delta * 0.02; 
//       }

//       // --- Text Labels Logic ---
//       if (nameLabel) {
//         // Opacity & Scale: Center-e asle vanish hobe, side-e gele boro hobe
//         const opacity = THREE.MathUtils.smoothstep(distFromCenter, 0.05, 0.05);
//         const textScale = THREE.MathUtils.smoothstep(distFromCenter, 0.02, 0.18);

//         nameLabel.style.opacity = opacity;
//         nameLabel.style.transform = `scale(${textScale})`;

//         // Side-switching: Planet-er obosthaner upor base kore alignment
//         if (diff > 0) {
//           // Planet bam dike -> Text dan dike
//           nameLabel.style.left = "140%";
//           nameLabel.style.right = "auto";
//           nameLabel.style.transformOrigin = "left center";
//         } else {
//           // Planet dan dike -> Text bam dike
//           nameLabel.style.left = "auto";
//           nameLabel.style.right = "140%";
//           nameLabel.style.transformOrigin = "right center";
//         }
//       }
//     });
//   });

//   return (
//     <group>
//       {PLANETS.map((planet, index) => (
//         <group key={planet.id} ref={(el) => (groupRef.current[index] = el)}>
//           {/* 3D Sphere & Decal logic (Agar motoi) */}
//           <mesh>
//             <sphereGeometry args={[1, 64, 64]} />
//             <meshBasicMaterial color="#101729" /> 
//             <Decal
//               position={[0, 0, 1]} 
//               rotation={[0, 0, 0]} 
//               scale={[2, 2, 2]} 
//               map={textures[index]}
//               transparent
//             />
//           </mesh>

//           {/* Dynamic Planet Name Labels */}
//           <Html center distanceFactor={10}>
//             <div 
//               ref={(el) => (nameRefs.current[index] = el)} 
//               className="absolute pointer-events-none select-none transition-all duration-300 ease-out"
//             >
//               <p className="bg-[linear-gradient(101.23deg,rgba(237,237,237,0.8)_24.07%,rgba(182,182,182,0.8)_96.8%)] bg-clip-text text-transparent  uppercase font-blac tracking-[0.2em] text-[clamp(0.6rem,3.5vw,3.5rem) text-[40px] whitespace-nowrap">
//                 <span className="text-shadow-black">{planet.name}</span>
//               </p>
//             </div>
//           </Html>
//         </group>
//       ))}
//     </group>
//   );
// }



"use client"
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture, Html, useProgress } from "@react-three/drei";
import { PLANETS } from "@/constants/planetsData";
import * as THREE from "three";

// ছোট একটি Loader কম্পোনেন্ট
function PlanetLoader() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Spinning Ring */}
      <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      {/* Inner Pulse */}
      <div className="absolute w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>
    </div>
  );
}

export default function PlanetGroup({ scrollYProgress }) {
  const groupRef = useRef([]);
  const nameRefs = useRef([]);
  const textures = useTexture(PLANETS.map(p => p.img));
  const { progress } = useProgress(); // ওভারঅল লোডিং প্রগ্রেস
  const [loaded, setLoaded] = useState(false);

  // সব ইমেজ লোড হয়ে গেলে loaded স্টেট ট্রু হবে
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setLoaded(true), 500); // একটু স্মুথ ট্রানজিশনের জন্য
    }
  }, [progress]);

  useFrame((state, delta) => {
    PLANETS.forEach((_, index) => {
      const item = groupRef.current[index];
      const nameLabel = nameRefs.current[index];
      if (!item) return;

      const scrollVal = scrollYProgress.get();
      const center = index / (PLANETS.length - 1);
      const diff = scrollVal - center;
      const distFromCenter = Math.abs(diff);

      const x = diff * -45; 
      const y = 0.5; 
      const scale = THREE.MathUtils.lerp(2, 0.4, Math.min(distFromCenter * 4, 1));
      const z = THREE.MathUtils.lerp(0, -10, Math.min(distFromCenter * 4, 1));

      item.position.set(x, y, z);
      item.scale.setScalar(scale);

      if (item.children[0] && item.children[0].type === "Mesh") {
        item.children[0].rotation.z -= delta * 0.2; 
      }

      if (nameLabel) {
        const opacity = THREE.MathUtils.smoothstep(distFromCenter, 0.05, 0.05);
        const textScale = THREE.MathUtils.smoothstep(distFromCenter, 0.02, 0.18);
        nameLabel.style.opacity = opacity;
        nameLabel.style.transform = `scale(${textScale})`;

        if (diff > 0) {
          nameLabel.style.left = "140%";
          nameLabel.style.right = "auto";
        } else {
          nameLabel.style.left = "auto";
          nameLabel.style.right = "140%";
        }
      }
    });
  });

  return (
    <group>
      {PLANETS.map((planet, index) => (
        <group key={planet.id} ref={(el) => (groupRef.current[index] = el)}>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color="#101729" /> 
            
            {/* ইমেজ লোড হলে ডেক্যাল দেখাবে */}
            {loaded && (
              <Decal
                position={[0, 0, 1]} 
                scale={[2, 2, 2]} 
                map={textures[index]}
                transparent
              />
            )}
          </mesh>

          {/* ইমেজ লোড না হওয়া পর্যন্ত এখানে লোডার দেখাবে */}
          {!loaded && (
            <Html center>
              <PlanetLoader />
            </Html>
          )}

          <Html center distanceFactor={10}>
            <div ref={(el) => (nameRefs.current[index] = el)} className="absolute pointer-events-none select-none transition-all duration-300">
              <p className="bg-[linear-gradient(101.23deg,rgba(237,237,237,0.8)_24.07%,rgba(182,182,182,0.8)_96.8%)] bg-clip-text text-transparent uppercase font-black tracking-[0.2em] text-[clamp(0.6rem,3.5vw,3.5rem)] whitespace-nowrap">
                {planet.name}
              </p>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}