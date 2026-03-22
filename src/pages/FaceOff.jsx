import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const brandLogos = [
  { name: 'Apple', color: '#dcc8aa' },
  { name: 'Samsung', color: '#78cfff' },
  { name: 'Google', color: '#b9df76' },
  { name: 'Xiaomi', color: '#ff9a3c' },
  { name: 'OnePlus', color: '#ff7a6f' },
];

const brandModels = {
  apple: [
    { name: 'iPhone 17 Pro Max', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80' },
    { name: 'iPhone 16 Pro', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80' },
    { name: 'iPhone 16', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
  ],
  samsung: [
    { name: 'Galaxy S26 Ultra', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80' },
    { name: 'Galaxy Z Fold 6', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80' },
    { name: 'Galaxy Z Flip', image: 'https://images.unsplash.com/photo-1614247285901-5ba09c0a4e94?w=400&q=80' },
  ],
  google: [
    { name: 'Pixel 10 Pro', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
    { name: 'Pixel 9a', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80' },
  ],
  xiaomi: [
    { name: 'Xiaomi 15 Ultra', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80' },
    { name: 'Xiaomi 15 Pro', image: 'https://images.unsplash.com/photo-1614247285901-5ba09c0a4e94?w=400&q=80' },
  ],
  oneplus: [
    { name: 'OnePlus 13', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
    { name: 'OnePlus Open', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80' },
  ],
};

const brandThemes = {
  apple: { accent: '#dcc8aa', glow: 'rgba(220,200,170,0.25)', bg: 'rgba(220,200,170,0.08)' },
  samsung: { accent: '#78cfff', glow: 'rgba(120,207,255,0.25)', bg: 'rgba(120,207,255,0.08)' },
  google: { accent: '#b9df76', glow: 'rgba(185,223,118,0.25)', bg: 'rgba(185,223,118,0.08)' },
  xiaomi: { accent: '#ff9a3c', glow: 'rgba(255,154,60,0.25)', bg: 'rgba(255,154,60,0.08)' },
  oneplus: { accent: '#ff7a6f', glow: 'rgba(255,122,111,0.25)', bg: 'rgba(255,122,111,0.08)' },
};

function MouseFollower({ children }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.05;
    target.current.y += (mouse.current.y - target.current.y) * 0.05;
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, target.current.x * 0.15, 0.05);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, target.current.y * 0.1, 0.05);
  });

  return children;
}

function IPhoneModel({ color = '#3a3a3c', position = [0, 0, 0] }) {
  const groupRef = useRef();

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

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3} floatingRange={[-0.08, 0.08]}>
      <group ref={groupRef} position={position} scale={0.9}>
        <RoundedBox args={[2.85, 6.05, 0.38]} radius={0.2} smoothness={48} material={titaniumMaterial} />
        
        <RoundedBox args={[2.75, 5.95, 0.015]} radius={0.18} smoothness={48} position={[0, 0, 0.19]} material={blackGlassMaterial} />
        
        <mesh position={[0, 2.75, 0.198]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.075, 0.7, 32, 64]} />
          <primitive object={blackGlassMaterial} attach="material" />
        </mesh>

        <group position={[0, 1.85, -0.21]}>
          <RoundedBox args={[2.55, 1.95, 0.12]} radius={0.25} smoothness={32} material={titaniumMaterial} />
          <RoundedBox args={[2.45, 1.85, 0.08]} radius={0.2} smoothness={32} position={[0, 0, 0.06]} material={blackGlassMaterial} />

          {[[-0.75, 0.65], [0.75, 0.65], [0, -0.55]].map(([x, y], i) => (
            <group key={i} position={[x, y, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh material={titaniumMaterial}><cylinderGeometry args={[0.34, 0.34, 0.08, 64]} /></mesh>
              <mesh position={[0, 0.04, 0]}><cylinderGeometry args={[0.3, 0.3, 0.02, 64]} /><primitive object={blackGlassMaterial} attach="material" /></mesh>
              <mesh position={[0, -0.04, 0]}><cylinderGeometry args={[0.26, 0.26, 0.02, 64]} /><primitive object={opticalLensGlass} attach="material" /></mesh>
            </group>
          ))}
        </group>

        {[[-1.44, 0.5], [-1.44, -0.05]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0]}><boxGeometry args={[0.06, 0.45, 0.08]} /><primitive object={titaniumMaterial} attach="material" /></mesh>
        ))}
        <mesh position={[1.44, 0.6, 0]}><boxGeometry args={[0.06, 0.5, 0.08]} /><primitive object={titaniumMaterial} attach="material" /></mesh>
      </group>
    </Float>
  );
}

function SamsungModel({ color = '#1f1f2e', position = [0, 0, 0] }) {
  const groupRef = useRef();

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness: 0.9,
        roughness: 0.15,
        clearcoat: 0.9,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.4,
      }),
    [color]
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

  const lensGlass = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#1a2a4a',
        metalness: 0.2,
        roughness: 0.0,
        transmission: 0.3,
        ior: 1.77,
        thickness: 0.3,
        clearcoat: 1,
      }),
    []
  );

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3} floatingRange={[-0.08, 0.08]}>
      <group ref={groupRef} position={position} scale={0.9}>
        <RoundedBox args={[2.8, 6.0, 0.36]} radius={0.18} smoothness={48} material={material} />
        
        <RoundedBox args={[2.7, 5.9, 0.015]} radius={0.16} smoothness={48} position={[0, 0, 0.185]} material={blackGlassMaterial} />
        
        <mesh position={[0, 2.7, 0.183]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.06, 0.55, 32, 64]} />
          <primitive object={blackGlassMaterial} attach="material" />
        </mesh>

        <group position={[0, 1.8, -0.2]}>
          <RoundedBox args={[2.6, 2.0, 0.1]} radius={0.3} smoothness={32} material={material} />
          <RoundedBox args={[2.5, 1.9, 0.06]} radius={0.25} smoothness={32} position={[0, 0, 0.05]} material={blackGlassMaterial} />

          {[[-0.7, 0.7], [0.7, 0.7], [0, -0.4]].map(([x, y], i) => (
            <group key={i} position={[x, y, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh material={material}><cylinderGeometry args={[0.32, 0.32, 0.08, 64]} /></mesh>
              <mesh position={[0, 0.04, 0]}><cylinderGeometry args={[0.28, 0.28, 0.02, 64]} /><primitive object={blackGlassMaterial} attach="material" /></mesh>
              <mesh position={[0, -0.04, 0]}><cylinderGeometry args={[0.24, 0.24, 0.02, 64]} /><primitive object={lensGlass} attach="material" /></mesh>
            </group>
          ))}
        </group>

        <mesh position={[-1.41, 0.4, 0]}><boxGeometry args={[0.06, 0.4, 0.08]} /><primitive object={material} attach="material" /></mesh>
        <mesh position={[1.41, 0.5, 0]}><boxGeometry args={[0.06, 0.5, 0.08]} /><primitive object={material} attach="material" /></mesh>
      </group>
    </Float>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 40 }} dpr={[1, 1.5]}>
      <MouseFollower>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <directionalLight position={[-10, 5, -5]} intensity={1.2} color="#ffd7b5" />
        <spotLight position={[0, 8, 8]} angle={0.3} penumbra={1} intensity={30} color="#ffffff" />
        <Environment preset="studio" />
        
        <group position={[-3, 0, 0]}>
          <IPhoneModel color="#3a3a3c" />
        </group>
        
        <group position={[3, 0, 0]}>
          <SamsungModel color="#1f1f2e" />
        </group>
      </MouseFollower>
    </Canvas>
  );
}

function BrandLogo({ name, color }) {
  return (
    <div className="group relative flex h-24 w-36 shrink-0 items-center justify-center">
      <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
           style={{ boxShadow: `0 0 30px ${color}20` }} />
      <div className="flex h-16 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10"
           style={{ boxShadow: `0 0 0 0 ${color}` }}
           onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${color}40`}
           onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 0 ${color}`}>
        <span className="text-lg font-semibold tracking-wider text-white/80" style={{ color }}>{name}</span>
      </div>
    </div>
  );
}

function BrandCard({ brandId, theme, isLarge = false }) {
  const [hoveredModel, setHoveredModel] = useState(null);
  const models = brandModels[brandId];
  const brandName = brandId.charAt(0).toUpperCase() + brandId.slice(1);

  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
         style={{ boxShadow: `0 20px 60px ${theme.glow}20` }}>
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: theme.accent }} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <span className="text-lg font-bold" style={{ color: theme.accent }}>{brandName[0]}</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{brandName}</h3>
              <p className="text-sm text-zinc-400">{models.length} models</p>
            </div>
          </div>
          <div className="rounded-full px-3 py-1 text-xs uppercase tracking-wider border" style={{ borderColor: `${theme.accent}40`, color: theme.accent, backgroundColor: theme.bg }}>
            {brandId === 'apple' ? 'Titanium' : brandId === 'samsung' ? 'AI Powered' : brandId === 'google' ? 'Camera AI' : brandId === 'xiaomi' ? 'Leica' : 'Hasselblad'}
          </div>
        </div>

        <div className={`mt-6 grid gap-3 ${isLarge ? 'md:grid-cols-2' : ''}`}>
          {models.map((model, idx) => (
            <div
              key={model.name}
              className="relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              onMouseEnter={() => setHoveredModel(model.name)}
              onMouseLeave={() => setHoveredModel(null)}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-zinc-800">
                  <img src={model.image} alt={model.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-white">{model.name}</p>
                  <p className="text-xs text-zinc-500">View Details</p>
                </div>
              </div>
              {hoveredModel === model.name && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 animate-pulse rounded-full p-2" style={{ backgroundColor: theme.bg }}>
                  <svg className="h-4 w-4" style={{ color: theme.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                style={{ '--hover-color': theme.accent }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${theme.glow}`}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
          Explore {brandName}
        </button>
      </div>
    </div>
  );
}

export default function FaceOff() {
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const vaultRef = useRef(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
      gsap.fromTo('.marquee-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.5 });
      gsap.fromTo('.brand-card', { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: vaultRef.current, start: 'top 80%' } });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId;
    let x = 0;
    const speed = 0.5;

    const animate = () => {
      x -= speed;
      if (x <= -marquee.scrollWidth / 2) {
        x = 0;
      }
      marquee.style.transform = `translateX(${x}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06070c] text-[#f6efe7]">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[rgba(7,8,14,0.85)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white text-sm font-semibold text-black">
              AM
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b8ab97]">Aura Mobile</p>
              <p className="text-xs text-zinc-400">Premium Phone Gallery</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="transition-colors hover:text-white">Face-Off</a>
            <a href="#" className="transition-colors hover:text-white">Showroom</a>
          </div>
          <button className="rounded-full bg-[#f3e7d7] px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03]">
            Pre-Order
          </button>
        </div>
      </nav>

      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCanvas />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
          <div className="hero-content text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-zinc-300 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Exclusive Pre-Order Event
            </div>
            
            <h1 className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl lg:text-8xl"
                style={{ fontFamily: '"Palatino Linotype", "Book Antiqua", Georgia, serif', letterSpacing: '-0.03em' }}>
              The Future.
              <br />
              <span className="bg-gradient-to-r from-[#dcc8aa] via-white to-[#78cfff] bg-clip-text text-transparent">In Your Hands.</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl">
              Two giants. One showdown. Experience the ultimate smartphone comparison.
            </p>

            <button className="mt-10 group relative overflow-hidden rounded-full bg-gradient-to-r from-[#dcc8aa] to-[#78cfff] px-10 py-4 text-lg font-semibold text-black shadow-[0_0_40px_rgba(220,200,170,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(220,200,170,0.5)]">
              <span className="relative z-10">Pre-Order Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#78cfff] to-[#dcc8aa] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          <div className="hero-content absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#3a3a3c] border border-zinc-600" />
              iPhone Pro Max
            </div>
            <div className="text-zinc-600">VS</div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#1f1f2e] border border-zinc-700" />
              Galaxy S26 Ultra
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06070c] to-transparent" />
      </section>

      <section className="relative border-y border-white/10 bg-[rgba(10,11,18,0.8)] py-8 backdrop-blur-xl">
        <div className="mb-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">Trusted Partners</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div ref={marqueeRef} className="flex gap-4 whitespace-nowrap" style={{ width: 'max-content' }}>
            {[...brandLogos, ...brandLogos].map((logo, idx) => (
              <div key={idx} className="marquee-item">
                <BrandLogo {...logo} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={vaultRef} className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#cbb496]">Brand Vault</p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl lg:text-6xl"
                style={{ fontFamily: '"Palatino Linotype", "Book Antiqua", Georgia, serif', letterSpacing: '-0.03em' }}>
              Explore Flagship Lineups
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              Dive deep into each ecosystem. Compare specs, designs, and innovations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(brandThemes).map(([brandId, theme]) => (
              <div key={brandId} className="brand-card">
                <BrandCard brandId={brandId} theme={theme} isLarge={brandId === 'samsung'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white text-sm font-semibold text-black">
                  AM
                </div>
                <span className="text-sm uppercase tracking-[0.3em] text-[#b8ab97]">Aura Mobile</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Your destination for premium smartphones. 100% authentic devices with official warranty.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Shop</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="transition-colors hover:text-white">iPhone Collection</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Samsung Galaxy</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Google Pixel</a></li>
                <li><a href="#" className="transition-colors hover:text-white">OnePlus Flagships</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Support</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="transition-colors hover:text-white">Warranty Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h4>
              <p className="mb-4 text-sm text-zinc-500">Get exclusive deals and launch updates.</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-white/30 focus:outline-none"
                />
                <button type="submit" className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
            <p>2026 Aura Mobile. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">Privacy</a>
              <a href="#" className="transition-colors hover:text-white">Terms</a>
              <a href="#" className="transition-colors hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
