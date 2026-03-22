import { forwardRef, useImperativeHandle, useMemo, useRef, useEffect } from 'react';
import { RoundedBox, useTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

const WAP_URL = 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop';

const Phone = forwardRef(function Phone({ color = '#3a3a3c' }, ref) {
  const groupRef = useRef(null);
  
  const screenTexture = useTexture(WAP_URL);
  const screenMap = useMemo(() => {
    const texture = screenTexture.clone();
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    return texture;
  }, [screenTexture]);

  const titaniumMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness: 0.95,
        roughness: 0.12,
        clearcoat: 0.8,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.5,
      }),
    [color]
  );
  
  const matteBackMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.08),
        metalness: 0.2,
        roughness: 0.75,
        clearcoat: 0.1,
      }),
    [color]
  );

  const screenImageMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: screenMap,
        transparent: false,
      }),
    [screenMap]
  );

  const blackGlassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#000000',
        metalness: 0.9,
        roughness: 0.0,
        clearcoat: 1,
        reflectivity: 1,
      }),
    []
  );

  const opticalLensGlass = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#1a2a4a',
        metalness: 0.2,
        roughness: 0.0,
        transmission: 0.3,
        ior: 1.77,
        thickness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0,
      }),
    []
  );

  useImperativeHandle(ref, () => ({
    group: groupRef.current,
  }), []);

  useEffect(() => () => screenMap.dispose(), [screenMap]);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={groupRef} dispose={null} scale={0.95}>
        {/* Main Titanium Frame - iPhone 17 Pro Max proportions */}
        <RoundedBox
          args={[2.85, 6.05, 0.38]}
          radius={0.2}
          smoothness={48}
          material={titaniumMaterial}
        />
        
        {/* Back Glass Panel with Matte Finish */}
        <mesh position={[0, -0.6, -0.19]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[2.75, 5.85]} />
          <primitive object={matteBackMaterial} attach="material" />
        </mesh>

        {/* Apple Logo */}
        <mesh position={[0, -0.3, -0.195]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.6, 0.6]} />
          <meshStandardMaterial 
            color={color === '#e8e8e8' ? '#b8b8b8' : '#888888'} 
            metalness={0.8}
            roughness={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Front Screen */}
        <RoundedBox 
          args={[2.75, 5.95, 0.015]} 
          radius={0.18} 
          smoothness={48}
          position={[0, 0, 0.19]}
          material={blackGlassMaterial} 
        />

        <RoundedBox 
          args={[2.67, 5.87, 0.01]} 
          radius={0.16} 
          smoothness={48}
          position={[0, 0, 0.195]}
          material={screenImageMaterial} 
        />
        
        {/* Dynamic Island - iPhone 17 Style */}
        <mesh position={[0, 2.75, 0.198]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.075, 0.7, 32, 64]} />
          <primitive object={blackGlassMaterial} attach="material" />
        </mesh>
        
        {/* Front Camera in Dynamic Island */}
        <mesh position={[0.15, 2.75, 0.199]}>
          <circleGeometry args={[0.035, 64]} />
          <meshBasicMaterial color="#0a1020" />
        </mesh>

        {/* Camera Control Button (New iPhone 16/17 Feature) */}
        <mesh position={[1.44, 0.15, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.08, 0.5, 0.06]} />
          <primitive object={titaniumMaterial} attach="material" />
        </mesh>

        {/* Action Button (Left Side) */}
        <mesh position={[-1.44, 1.1, 0]}>
          <boxGeometry args={[0.06, 0.35, 0.08]} />
          <primitive object={titaniumMaterial} attach="material" />
        </mesh>

        {/* Volume Buttons */}
        <mesh position={[-1.44, 0.5, 0]}>
          <boxGeometry args={[0.06, 0.45, 0.08]} />
          <primitive object={titaniumMaterial} attach="material" />
        </mesh>
        <mesh position={[-1.44, -0.05, 0]}>
          <boxGeometry args={[0.06, 0.45, 0.08]} />
          <primitive object={titaniumMaterial} attach="material" />
        </mesh>

        {/* Power Button */}
        <mesh position={[1.44, 0.6, 0]}>
          <boxGeometry args={[0.06, 0.5, 0.08]} />
          <primitive object={titaniumMaterial} attach="material" />
        </mesh>

        {/* iPhone 17 Pro Max Camera Module - Modern Design */}
        <group position={[0, 1.85, -0.21]}>
          {/* Camera Housing Base */}
          <RoundedBox
            args={[2.55, 1.95, 0.12]}
            radius={0.25}
            smoothness={32}
            material={titaniumMaterial}
          />
          
          {/* Black Camera Bump */}
          <RoundedBox
            args={[2.45, 1.85, 0.08]}
            radius={0.2}
            smoothness={32}
            position={[0, 0, 0.06]}
            material={blackGlassMaterial}
          />

          {/* Camera Lens 1 - Top Left */}
          <group position={[-0.75, 0.65, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Outer Ring */}
            <mesh material={titaniumMaterial}>
              <cylinderGeometry args={[0.34, 0.34, 0.08, 64]} />
            </mesh>
            {/* Lens Housing */}
            <mesh position={[0, 0.04, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.02, 64]} />
              <primitive object={blackGlassMaterial} attach="material" />
            </mesh>
            {/* Glass Lens with Blue Tint */}
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.26, 0.26, 0.02, 64]} />
              <primitive object={opticalLensGlass} attach="material" />
            </mesh>
            {/* Lens Center Reflection */}
            <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.12, 64]} />
              <meshBasicMaterial color="#0a1525" />
            </mesh>
          </group>

          {/* Camera Lens 2 - Top Right (5x Telephoto) */}
          <group position={[0.75, 0.65, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Outer Ring */}
            <mesh material={titaniumMaterial}>
              <cylinderGeometry args={[0.34, 0.34, 0.08, 64]} />
            </mesh>
            {/* Lens Housing */}
            <mesh position={[0, 0.04, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.02, 64]} />
              <primitive object={blackGlassMaterial} attach="material" />
            </mesh>
            {/* Glass Lens with Blue Tint */}
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.26, 0.26, 0.02, 64]} />
              <primitive object={opticalLensGlass} attach="material" />
            </mesh>
            {/* Lens Center Reflection */}
            <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.12, 64]} />
              <meshBasicMaterial color="#0a1525" />
            </mesh>
          </group>

          {/* Camera Lens 3 - Bottom Center (Ultra Wide) */}
          <group position={[0, -0.55, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Outer Ring */}
            <mesh material={titaniumMaterial}>
              <cylinderGeometry args={[0.34, 0.34, 0.08, 64]} />
            </mesh>
            {/* Lens Housing */}
            <mesh position={[0, 0.04, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.02, 64]} />
              <primitive object={blackGlassMaterial} attach="material" />
            </mesh>
            {/* Glass Lens with Blue Tint */}
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.26, 0.26, 0.02, 64]} />
              <primitive object={opticalLensGlass} attach="material" />
            </mesh>
            {/* Lens Center Reflection */}
            <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.12, 64]} />
              <meshBasicMaterial color="#0a1525" />
            </mesh>
          </group>

          {/* Flash */}
          <mesh position={[1.0, 0.7, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.03, 32]} />
            <meshStandardMaterial color="#fff8e8" emissive="#fff8e8" emissiveIntensity={0.5} />
          </mesh>
          
          {/* LiDAR Scanner */}
          <mesh position={[1.0, -0.3, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
            <primitive object={blackGlassMaterial} attach="material" />
          </mesh>
          
          {/* Microphone Dot */}
          <mesh position={[-0.9, -0.4, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.02, 32]} />
            <primitive object={blackGlassMaterial} attach="material" />
          </mesh>
        </group>

        {/* Side Antenna Lines */}
        <mesh position={[0, -2.7, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.04]} />
          <primitive object={blackGlassMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 2.3, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.04]} />
          <primitive object={blackGlassMaterial} attach="material" />
        </mesh>

        {/* USB-C Port */}
        <mesh position={[0, -3.02, 0]}>
          <boxGeometry args={[0.5, 0.03, 0.12]} />
          <primitive object={blackGlassMaterial} attach="material" />
        </mesh>

        {/* Speaker Grilles - Bottom */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[-0.8 + i * 0.25, -3.02, 0.05]}>
            <boxGeometry args={[0.08, 0.015, 0.04]} />
            <primitive object={blackGlassMaterial} attach="material" />
          </mesh>
        ))}
      </group>
    </Float>
  );
});

export default Phone;
