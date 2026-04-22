// "use client"
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Image } from "@react-three/drei";
// import { PLANETS } from "@/constants/planetsData";
// import * as THREE from "three";

// export default function PlanetGroup({ scrollYProgress }) {
//   const groupRef = useRef([]);

//   useFrame(() => {
//     PLANETS.forEach((_, index) => {
//       const item = groupRef.current[index];
//       if (!item) return;

//       const progress = scrollYProgress.get();
//       const center = index / (PLANETS.length - 1);
      
//       // Horizontal Slide Logic (100vw behavior)
//       // [Start, Center, End] scroll positions
//       const range = [center - 0.2, center, center + 0.2];
      
//       // X Position: -20 (bam) -> 0 (center) -> 20 (dan)
//       const x = THREE.MathUtils.mapLinear(progress, center - 0.25, center + 0.25, 15, -15);
      
//       // Scale Logic: Center-e asle boro
//       const distFromCenter = Math.abs(progress - center);
//       const scale = THREE.MathUtils.lerp(3.8, 0.8, Math.min(distFromCenter * 5, 1));
      
//       // Z Position: Overlay control korar jonno
//       const z = THREE.MathUtils.lerp(2, -5, Math.min(distFromCenter * 5, 1));

//       item.position.set(x, 0, z);
//       item.scale.set(scale, scale, 1);
      
//       // Opacity adjustment
//       if (item.children[0]?.material) {
//         item.children[0].material.opacity = THREE.MathUtils.lerp(1, 0.1, Math.min(distFromCenter * 6, 1));
//         item.children[0].material.transparent = true;
//       }
//     });
//   });

//   return (
//     <group>
//       {PLANETS.map((planet, index) => (
//         <group key={planet.id} ref={(el) => (groupRef.current[index] = el)}>
//           <Image url={planet.img} transparent />
//         </group>
//       ))}
//     </group>
//   );
// }




// "use client"
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Decal, useTexture } from "@react-three/drei";
// import { PLANETS } from "@/constants/planetsData";
// import * as THREE from "three";

// export default function PlanetGroup({ scrollYProgress }) {
//   const groupRef = useRef([]);
//   const textures = useTexture(PLANETS.map(p => p.img));

//   useFrame((state, delta) => {
//     PLANETS.forEach((_, index) => {
//       const item = groupRef.current[index];
//       if (!item) return;

//       const progress = scrollYProgress.get();
//       const center = index / (PLANETS.length - 1);
//       const distFromCenter = Math.abs(progress - center);

//       // Positioning Logic
//       // const x = (progress - center) * -40; 
//       const x = (progress - center) * -45; 
      
//       // --- পরিবর্তন এখানে ---
//       // 0 এর পরিবর্তে এখানে positive মান দিলে উপরে উঠবে। 
//       // ২ থেকে ৫ এর মধ্যে ট্রাই করে দেখতে পারেন।
//       const y = 0.5; 
      
//       // const scale = THREE.MathUtils.lerp(2.2, 0.5, Math.min(distFromCenter * 4, 1));
//       const scale = THREE.MathUtils.lerp(1.8, 0.4, Math.min(distFromCenter * 4, 1));
//       const z = THREE.MathUtils.lerp(0, -10, Math.min(distFromCenter * 4, 1));

//       // y পজিশন সেট করা হলো
//       item.position.set(x, y, z);
//       item.scale.setScalar(scale);

//       if (item.children[0]) {
//         item.children[0].rotation.z -= delta * 0.02; 
//       }
//     });
//   });

//   return (
//     <group>
//       {PLANETS.map((planet, index) => (
//         <group key={planet.id} ref={(el) => (groupRef.current[index] = el)}>
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
//         </group>
//       ))}
//     </group>
//   );
// }










"use client"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture, Html } from "@react-three/drei";
import { PLANETS } from "@/constants/planetsData";
import * as THREE from "three";

export default function PlanetGroup({ scrollYProgress }) {
  const groupRef = useRef([]);
  const nameRefs = useRef([]);
  const textures = useTexture(PLANETS.map(p => p.img));

  useFrame((state, delta) => {
    PLANETS.forEach((_, index) => {
      const item = groupRef.current[index];
      const nameLabel = nameRefs.current[index];
      if (!item) return;

      const progress = scrollYProgress.get();
      const center = index / (PLANETS.length - 1);
      const diff = progress - center;
      const distFromCenter = Math.abs(diff);

      // Positioning Logic (Apnar deya agar logic onujayi)
      const x = diff * -45; 
      const y = 0.5; 
      const scale = THREE.MathUtils.lerp(1.8, 0.4, Math.min(distFromCenter * 4, 1));
      const z = THREE.MathUtils.lerp(0, -10, Math.min(distFromCenter * 4, 1));

      item.position.set(x, y, z);
      item.scale.setScalar(scale);

      // Rotation logic
      if (item.children[0]) {
        item.children[0].rotation.z -= delta * 0.02; 
      }

      // --- Text Labels Logic ---
      if (nameLabel) {
        // Opacity & Scale: Center-e asle vanish hobe, side-e gele boro hobe
        const opacity = THREE.MathUtils.smoothstep(distFromCenter, 0.05, 0.15);
        const textScale = THREE.MathUtils.smoothstep(distFromCenter, 0.02, 0.18);

        nameLabel.style.opacity = opacity;
        nameLabel.style.transform = `scale(${textScale})`;

        // Side-switching: Planet-er obosthaner upor base kore alignment
        if (diff > 0) {
          // Planet bam dike -> Text dan dike
          nameLabel.style.left = "140%";
          nameLabel.style.right = "auto";
          nameLabel.style.transformOrigin = "left center";
        } else {
          // Planet dan dike -> Text bam dike
          nameLabel.style.left = "auto";
          nameLabel.style.right = "140%";
          nameLabel.style.transformOrigin = "right center";
        }
      }
    });
  });

  return (
    <group>
      {PLANETS.map((planet, index) => (
        <group key={planet.id} ref={(el) => (groupRef.current[index] = el)}>
          {/* 3D Sphere & Decal logic (Agar motoi) */}
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial color="#101729" /> 
            <Decal
              position={[0, 0, 1]} 
              rotation={[0, 0, 0]} 
              scale={[2, 2, 2]} 
              map={textures[index]}
              transparent
            />
          </mesh>

          {/* Dynamic Planet Name Labels */}
          <Html center distanceFactor={10}>
            <div 
              ref={(el) => (nameRefs.current[index] = el)} 
              className="absolute pointer-events-none select-none transition-all duration-300 ease-out"
            >
              <p className="text-white uppercase font-black tracking-[0.2em] text-[clamp(0.6rem,3vw,2.5rem)] whitespace-nowrap">
                {planet.name}
              </p>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}