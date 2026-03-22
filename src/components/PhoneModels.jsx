import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function IphoneModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
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
      <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function SamsungModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
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
      <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

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

export default function PhoneModels() {
  return (
    <>
      <Environment preset="city" background={false} />
      <Lights />
      
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 6, Math.PI / 6]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <IphoneModel 
          position={[-2.5, 0, 0]} 
          scale={25} 
          rotation={[0, Math.PI, 0]}
        />
        <SamsungModel 
          position={[2.5, 0, 0]} 
          scale={25} 
          rotation={[0, Math.PI, 0]}
        />
      </PresentationControls>

      <ContactShadows 
        position={[0, -8, 0]} 
        opacity={0.5} 
        scale={20} 
        blur={4} 
        far={10} 
        color="#000000" 
      />
    </>
  );
}

useGLTF.preload('/Phone 17 Pro Max Simple.glb');
useGLTF.preload('/s_amsung_galaxy_s25_ultra_galaxy.glb');
