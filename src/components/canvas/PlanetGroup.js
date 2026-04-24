"use client"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, Html } from "@react-three/drei";
import { PLANETS } from "@/constants/planetsData";
import * as THREE from "three";

export default function PlanetGroup({ scrollYProgress }) {
  const groupRef = useRef([]);
  const nameRefs = useRef([]);

  useFrame((state, delta) => {
    PLANETS.forEach((_, index) => {
      const item = groupRef.current[index];
      const nameLabel = nameRefs.current[index];
      if (!item) return;

      const progress = scrollYProgress.get();
      const center = index / (PLANETS.length - 1);
      const diff = progress - center;
      const distFromCenter = Math.abs(diff);

      // Positioning logic
      const x = diff * -45; 
      const y = 0.5; 
      const scale = THREE.MathUtils.lerp(2.2, 0.3, Math.min(distFromCenter * 4, 1));
      const z = THREE.MathUtils.lerp(0, -10, Math.min(distFromCenter * 4, 1));

      item.position.set(x, y, z);
      item.scale.setScalar(scale);

      // 2D Image Rotation (Z-axis)
      if (item.children[0]) {
        item.children[0].rotation.z -= delta * 0.02; 
      }

      // Text Labels Logic
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
          <Image 
            url={planet.img} 
            transparent 
            scale={[2, 2]} // Image Size
            toneMapped={false} 
          />

          <Html center distanceFactor={10}>
            <div 
              ref={(el) => (nameRefs.current[index] = el)} 
              className="absolute pointer-events-none select-none transition-all duration-300 ease-out"
            >
              <p className="bg-[linear-gradient(101.23deg,rgba(237,237,237,0.8)_24.07%,rgba(182,182,182,0.8)_96.8%)] bg-clip-text text-transparent  uppercase font-blac tracking-[0.2em] text-[clamp(0.6rem,3.5vw,3.5rem) text-[40px] whitespace-nowrap">
                <span className="text-shadow-black">{planet.name}</span>
              </p>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}