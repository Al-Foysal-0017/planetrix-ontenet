"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PlanetGroup from "./PlanetGroup";
import PlanetInfo from "../ui/PlanetInfo";
import OrbitBackground from "./OrbitBackground"; // Import logic
import { Stars } from "@react-three/drei";

export default function Scene({ scrollYProgress }) {
  return (
    <>
      <PlanetInfo scrollYProgress={scrollYProgress} />
      
      {/* Dynamic background gradient setting */}
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 40 }}
        gl={{ alpha: true, antialias: true }} // Gradient fix
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={3000} factor={4} />
          <ambientLight intensity={1} />
          
          {/* Main dynamic planets sequence logic */}
          <PlanetGroup scrollYProgress={scrollYProgress} />
          
          {/* Pishoner orbital background logic */}
          <OrbitBackground />
        </Suspense>
      </Canvas>
    </>
  );
}


