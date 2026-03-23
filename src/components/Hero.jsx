import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import PhoneModels from './PhoneModels';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TypewriterText({ text, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={started ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-full bg-white/80 ml-1 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const iphoneGroupRef = useRef(null);
  const samsungGroupRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          }
        }
      });

      tl.to(textRef.current, {
        yPercent: -100,
        opacity: 0,
        ease: "none",
      }, 0);

      tl.to(canvasRef.current, {
        yPercent: 30,
        scale: 0.85,
        opacity: 0,
        ease: "power2.inOut",
      }, 0);

      if (iphoneGroupRef.current && samsungGroupRef.current) {
        tl.to([iphoneGroupRef.current, samsungGroupRef.current], {
          rotationY: 0,
          ease: "power2.inOut",
        }, 0);

        tl.to(iphoneGroupRef.current, {
          x: -5,
          scale: 0.7,
          ease: "power2.inOut",
        }, 0);

        tl.to(samsungGroupRef.current, {
          x: 5,
          scale: 0.7,
          ease: "power2.inOut",
        }, 0);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (iphoneGroupRef.current && samsungGroupRef.current) {
      const currentY = Math.PI + (scrollProgress * -Math.PI);
      iphoneGroupRef.current.rotation.y = currentY;
      samsungGroupRef.current.rotation.y = currentY;
    }
  }, [scrollProgress]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-zinc-900/40 via-zinc-800/20 to-transparent blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-tl from-zinc-900/40 via-zinc-800/20 to-transparent blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div ref={textRef} className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
        <motion.p
          className="text-[11px] uppercase tracking-[0.5em] text-zinc-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Ultimate Flagship Showdown
        </motion.p>
        <motion.h1
          className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 text-center leading-[0.85] select-none"
          initial={{ opacity: 0, scale: 0.95, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Beyond<br />Limits.
        </motion.h1>
        <motion.div
          className="flex items-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
          >
            <span className="text-xs text-zinc-600 tracking-[0.3em] uppercase mb-2">Introducing</span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
              <TypewriterText text="iPhone 17 Pro Max" delay={1.2} className="shimmer-text" />
            </span>
          </motion.div>

          <motion.div
            className="relative px-6 py-4 rounded-full border border-zinc-700/50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <span className="text-sm font-bold tracking-widest bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              VS
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
          >
            <span className="text-xs text-zinc-600 tracking-[0.3em] uppercase mb-2">Featuring</span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
              <TypewriterText text="Galaxy S26 Ultra" delay={1.6} className="shimmer-text" />
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div ref={canvasRef} className="absolute inset-0 z-30">
        <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 2]}>
          <PhoneModels 
            iphoneRef={iphoneGroupRef} 
            samsungRef={samsungGroupRef}
          />
        </Canvas>
      </div>

      <div className="absolute bottom-16 z-50 flex justify-center w-full pointer-events-auto">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">
            Scroll to explore
          </motion.p>
          <div className="flex items-center gap-4">
            <motion.button
              className="relative px-10 py-4 rounded-full bg-white text-black font-semibold tracking-widest uppercase text-xs overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Pre-Order Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 rounded-full blur-md bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
            <Link
              to="/showroom"
              className="relative px-10 py-4 rounded-full border border-white/30 text-white font-semibold tracking-widest uppercase text-xs overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              Browse All
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-sm font-semibold text-white">AM</span>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Aura Mobile</span>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
