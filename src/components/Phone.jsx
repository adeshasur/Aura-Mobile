import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// A procedural premium phone model
const Phone = forwardRef(({ color = '#2997ff', ...props }, ref) => {
  // We'll create a nice look using shiny materials
  const bodyMaterial = new THREE.MeshStandardMaterial({ 
    color: color, 
    metalness: 0.8, 
    roughness: 0.2 
  });
  
  const screenMaterial = new THREE.MeshStandardMaterial({ 
    color: '#000000', 
    metalness: 0.9, 
    roughness: 0.1 
  });

  const lensMaterial = new THREE.MeshStandardMaterial({
    color: '#111111',
    metalness: 1,
    roughness: 0.05
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      {/* Phone Body */}
      <RoundedBox args={[2.5, 5.2, 0.4]} radius={0.3} smoothness={8} position={[0, 0, 0]} material={bodyMaterial} />
      
      {/* Phone Screen */}
      <RoundedBox args={[2.3, 5.0, 0.41]} radius={0.2} smoothness={8} position={[0, 0, 0.02]} material={screenMaterial} />
      
      {/* Camera Bump (Back) */}
      <RoundedBox args={[1.0, 1.0, 0.1]} radius={0.2} smoothness={4} position={[-0.6, 1.9, -0.22]} material={bodyMaterial} />
      
      {/* Lenses */}
      <mesh position={[-0.8, 2.1, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.06, 32]} />
        <primitive object={lensMaterial} />
      </mesh>
      <mesh position={[-0.4, 1.7, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.06, 32]} />
        <primitive object={lensMaterial} />
      </mesh>
      <mesh position={[-0.4, 2.1, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.06, 32]} />
        <primitive object={lensMaterial} />
      </mesh>
      
      {/* Apple/Aura Logo Placeholder */}
      <mesh position={[0, 0.5, -0.21]}>
        <ringGeometry args={[0.2, 0.25, 32]} />
        <meshBasicMaterial color="#ffffff" opacity={0.5} transparent />
      </mesh>
    </group>
  );
});

export default Phone;
