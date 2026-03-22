import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import PhoneModels from './PhoneModels';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        yPercent: -50,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(canvasRef.current, {
        yPercent: 15,
        scale: 0.92,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-zinc-900/40 via-zinc-800/20 to-transparent blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-tl from-zinc-900/40 via-zinc-800/20 to-transparent blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Ultimate Photorealistic Back View
        </motion.p>
        <motion.h1
          className="text-6xl md:text-[9rem] lg:text-[12rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800 text-center leading-[0.85] select-none"
          initial={{ opacity: 0, scale: 0.95, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Back<br />View.
        </motion.h1>
        <motion.div
          className="flex items-center gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 border border-zinc-500" />
            <span className="text-sm text-zinc-400 tracking-wide">iPhone 17 Pro Max</span>
          </div>
          <span className="text-zinc-600 text-sm">VS</span>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-700 border border-zinc-600" />
            <span className="text-sm text-zinc-400 tracking-wide">Galaxy S26 Ultra</span>
          </div>
        </motion.div>
      </div>

      <div ref={canvasRef} className="absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <PhoneModels />
        </Canvas>
      </div>

      <div className="absolute bottom-16 z-30 flex justify-center w-full">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">
            Move mouse to rotate
          </motion.p>
          <motion.button
            className="relative px-10 py-4 rounded-full bg-white text-black font-semibold tracking-widest uppercase text-xs overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Pre-Order Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 rounded-full blur-md bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white">AM</span>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Aura Mobile</span>
        </motion.div>
      </div>
    </section>
  );
}
