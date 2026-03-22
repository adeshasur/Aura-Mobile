import { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export const IphoneModel = forwardRef(function IphoneModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }, ref) {
  const { scene } = useGLTF('/Phone 17 Pro Max Simple.glb');
  const groupRef = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation[1] + (pointer.x * Math.PI) / 8,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        rotation[0] - (pointer.y * Math.PI) / 16,
        0.05
      );
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.1}
      floatIntensity={0.3}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={(node) => {
        groupRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }} position={position} scale={scale} rotation={rotation}>
        <primitive object={scene} />
      </group>
    </Float>
  );
});

export const SamsungModel = forwardRef(function SamsungModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }, ref) {
  const { scene } = useGLTF('/s_amsung_galaxy_s25_ultra_galaxy.glb');
  const groupRef = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation[1] + (pointer.x * Math.PI) / 8,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        rotation[0] - (pointer.y * Math.PI) / 16,
        0.05
      );
    }
  });

  return (
    <Float
      speed={1.3}
      rotationIntensity={0.1}
      floatIntensity={0.3}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={(node) => {
        groupRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }} position={position} scale={scale} rotation={rotation}>
        <primitive object={scene} />
      </group>
    </Float>
  );
});

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} color="#ffffff" />
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={2} 
        color="#ffffff" 
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight 
        position={[-6, 6, 3]} 
        intensity={1.2} 
        color="#c8d4e4" 
      />
      <directionalLight 
        position={[0, -4, -6]} 
        intensity={0.6} 
        color="#a4b4c4" 
      />
      <spotLight 
        position={[8, 10, 8]} 
        angle={0.25} 
        penumbra={0.8} 
        intensity={30} 
        color="#ffffff"
      />
      <spotLight 
        position={[-8, 8, 6]} 
        angle={0.3} 
        penumbra={1} 
        intensity={20} 
        color="#d4e4f4"
      />
      <pointLight 
        position={[3, 2, 4]} 
        intensity={6} 
        color="#ffffff" 
        distance={15} 
      />
      <pointLight 
        position={[-3, 2, 4]} 
        intensity={4} 
        color="#e0e8f0" 
        distance={12} 
      />
    </>
  );
}

export default function PhoneModels({ iphoneRef, samsungRef }) {
  return (
    <>
      <Environment preset="city" background={false} />
      <Lights />
      
      <IphoneModel 
        ref={iphoneRef}
        position={[-2.5, 0, 0]} 
        scale={22} 
        rotation={[0, Math.PI, 0]}
      />
      <SamsungModel 
        ref={samsungRef}
        position={[2.5, 0, 0]} 
        scale={22} 
        rotation={[0, Math.PI, 0]}
      />

      <ContactShadows 
        position={[0, -6, 0]} 
        opacity={0.5} 
        scale={18} 
        blur={4} 
        far={8} 
        color="#000000" 
      />
    </>
  );
}

useGLTF.preload('/Phone 17 Pro Max Simple.glb');
useGLTF.preload('/s_amsung_galaxy_s25_ultra_galaxy.glb');
