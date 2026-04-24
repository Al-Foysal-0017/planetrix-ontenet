"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three"; 
import PlanetGroup from "./PlanetGroup";
import PlanetInfo from "../ui/PlanetInfo";
import OrbitBackground from "./OrbitBackground";
import { Stars } from "@react-three/drei";

export default function Scene({ scrollYProgress }) {
  return (
    <>
      <PlanetInfo scrollYProgress={scrollYProgress} />
      
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 40 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          toneMapping: THREE.NoToneMapping,
          outputColorSpace: THREE.SRGBColorSpace 
        }}
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitBackground />
          
          <ambientLight intensity={1} />
          
          <PlanetGroup scrollYProgress={scrollYProgress} />
        </Suspense>
      </Canvas>
    </>
  );
}