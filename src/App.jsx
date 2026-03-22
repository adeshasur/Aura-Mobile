import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Phone from './components/Phone';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const phoneRef = useRef();
  const heroTextRef = useRef();
  const [phoneColor, setPhoneColor] = useState('#2997ff');

  useLayoutEffect(() => {
    // We need to wait a tick for the canvas/phone to mount
    const timer = setTimeout(() => {
      if (!phoneRef.current) return;

      // Reset initial state
      phoneRef.current.rotation.set(0, Math.PI, 0); // Back showing
      phoneRef.current.position.set(0, -1, 0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // 1. Hero Reveal: scroll down -> phone rotates to face front & moves up
      tl.to(heroTextRef.current, { opacity: 0, y: -50, duration: 0.5 }, 0);
      tl.to(phoneRef.current.rotation, { y: 0, duration: 1 }, 0);
      tl.to(phoneRef.current.position, { y: 0, duration: 1 }, 0);

      // 2. Features entry: Phone moves to the right
      tl.to(phoneRef.current.position, { x: 2.5, duration: 1 }, 1);
      
      // Feature 1 (Camera): rotate to show camera bump
      tl.to(phoneRef.current.rotation, { y: Math.PI / 4 + 0.5, z: -0.1, duration: 1 }, 1.5);
      
      // Feature 2 (Chip): zoom in on back
      tl.to(phoneRef.current.position, { z: 3, x: 1.5, y: -1, duration: 1 }, 2.5);
      tl.to(phoneRef.current.rotation, { y: Math.PI, z: 0, duration: 1 }, 2.5);

      // Feature 3 (Battery): rotate back to front
      tl.to(phoneRef.current.position, { z: 0, x: 2.5, y: 0, duration: 1 }, 3.5);
      tl.to(phoneRef.current.rotation, { y: 0, duration: 1 }, 3.5);

      // 3. Color Picker: Phone back to center
      tl.to(phoneRef.current.position, { x: 0, z: 0, duration: 1 }, 4.5);
      tl.to(phoneRef.current.rotation, { y: 0, z: 0, duration: 1 }, 4.5);

      // 4. Final CTA: Phone spins
      tl.to(phoneRef.current.rotation, { y: Math.PI * 2, duration: 2 }, 6);
      
      return () => {
        tl.kill();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main-container" className="relative w-full bg-black text-white font-sans overflow-hidden">
      {/* 3D Canvas fixed in background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Environment preset="city" />
          <Phone ref={phoneRef} color={phoneColor} />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        </Canvas>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 pointer-events-none">
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <div ref={heroTextRef} className="text-center pb-32">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
              Pro. Beyond Limits.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">Innovation meets elegance.</p>
          </div>
        </section>

        {/* Features Unpacked Section */}
        {/* We use margin/padding to space them out so user scrolls through them matching the GSAP scrub timeline */}
        <section className="flex flex-col w-full h-[300vh] justify-between py-[50vh]">
          <div className="w-1/2 pl-12 md:pl-32 flex flex-col justify-center h-screen">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">48MP Camera</h2>
            <p className="text-2xl text-gray-400 max-w-md">Capture the universe in your pocket. Brilliant low-light performance.</p>
          </div>
          <div className="w-1/2 pl-12 md:pl-32 flex flex-col justify-center h-[50vh]">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">A17 Pro Chip</h2>
            <p className="text-2xl text-gray-400 max-w-md">Unmatched mobile gaming performance with hardware accelerated ray-tracing.</p>
          </div>
          <div className="w-1/2 pl-12 md:pl-32 flex flex-col justify-center h-[50vh]">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">All-day Battery</h2>
            <p className="text-2xl text-gray-400 max-w-md">Power through your busiest days without ever searching for an outlet.</p>
          </div>
        </section>

        {/* Color Picker Section */}
        <section className="h-[150vh] flex flex-col items-center justify-center pointer-events-auto bg-gradient-to-b from-transparent to-black">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">Select your finish.</h2>
          <div className="flex gap-10">
            <button 
              className={`w-20 h-20 rounded-full bg-[#1a1a1a] shadow-lg hover:scale-110 transition-transform ${phoneColor === '#1a1a1a' ? 'scale-125 ring-4 ring-white ring-offset-4 ring-offset-black' : ''}`}
              onClick={() => setPhoneColor('#1a1a1a')}
              aria-label="Titanium Black"
            ></button>
            <button 
              className={`w-20 h-20 rounded-full bg-[#e3e4e5] border border-gray-300 shadow-lg hover:scale-110 transition-transform ${phoneColor === '#e3e4e5' ? 'scale-125 ring-4 ring-white ring-offset-4 ring-offset-black' : ''}`}
              onClick={() => setPhoneColor('#e3e4e5')}
              aria-label="Titanium White"
            ></button>
            <button 
              className={`w-20 h-20 rounded-full bg-[#2997ff] shadow-lg hover:scale-110 transition-transform ${phoneColor === '#2997ff' ? 'scale-125 ring-4 ring-blue-400 ring-offset-4 ring-offset-black' : ''}`}
              onClick={() => setPhoneColor('#2997ff')}
              aria-label="Titanium Blue"
            ></button>
          </div>
          <div className="mt-12 text-2xl text-gray-400">
            {phoneColor === '#1a1a1a' ? 'Titanium Black' : phoneColor === '#e3e4e5' ? 'Titanium White' : 'Titanium Blue'}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="h-screen flex flex-col items-center justify-center pointer-events-auto bg-black pb-20">
          <h2 className="text-7xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">Aura Mobile</h2>
          <p className="text-3xl text-gray-400 mb-16 font-light">The future is now in your hands.</p>
          <button className="px-16 py-6 bg-white text-black font-bold rounded-full text-2xl hover:bg-gray-200 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-2">
            Pre-order Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
