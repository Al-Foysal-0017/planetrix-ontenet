"use client"
import * as THREE from 'three';
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function OrbitBackground() {
  const meshRef = useRef();
  
  // Texture load korar logic
  const orbitTexture = useLoader(TextureLoader, '/images/orbit.png'); 

  // Protiti frame-e rotation update korar logic
  useFrame((state, delta) => {
    if (meshRef.current) {
      // delta babohar korle animation shob device-e ekoi speed-e cholbe
      // 0.02 value-ti komale ba barale ghurar speed change hobe
      meshRef.current.rotation.z += delta * 0.02; 
    }
  });

  return (
    <group>
      <mesh 
        ref={meshRef}
        position={[0, -2, -15]} // Depth pishone set kora
        rotation={[0, 0, 0]}   
      >
        <planeGeometry args={[50, 28]} /> {/* Canvas size onujayi ektu boro kora hoyeche */}
        
        <meshBasicMaterial 
          map={orbitTexture} 
          transparent={true} 
          opacity={0.7} // Background e jate planet gulo ke distrub na kore tai halka kora
          depthTest={false} 
        />
      </mesh>
    </group>
  );
}