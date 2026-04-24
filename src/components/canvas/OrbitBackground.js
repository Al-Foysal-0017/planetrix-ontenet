"use client"
import * as THREE from 'three';
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function OrbitBackground() {
  const meshRef = useRef();
  
  // Texture Load Logic
  const orbitTexture = useLoader(TextureLoader, '/images/orbit.png'); 

  // Rotation Update Logic on All Frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // using delta for animation speed same for all device
      meshRef.current.rotation.z += delta * 0.02; 
    }
  });

  return (
    <group>
      <mesh 
        ref={meshRef}
        position={[0, -2, -15]}
        rotation={[0, 0, 0]}   
      >
        <planeGeometry args={[50, 28]} /> {/* Canvas size set*/}
        
        <meshBasicMaterial 
          map={orbitTexture} 
          transparent={true} 
          opacity={0.7} // Opacity for Background Image
          depthTest={false} 
        />
      </mesh>
    </group>
  );
}