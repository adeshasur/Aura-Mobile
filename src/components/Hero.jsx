import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
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

      <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
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
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-700/50 to-zinc-900/50 border border-zinc-600/30 backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 tracking-widest uppercase mb-1">Introducing</span>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
                <TypewriterText text="iPhone 17 Pro Max" delay={1.2} className="shimmer-text" />
              </span>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
            </div>
            <motion.div
              className="relative z-10 px-6 py-3 rounded-full border border-zinc-700/50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="text-sm font-bold tracking-widest bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                VS
              </span>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-700/50 to-zinc-900/50 border border-zinc-600/30 backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 4.5v15h15v-15h-15zm13.35 10.5c.47-.65.73-1.5.73-2.5s-.26-1.85-.73-2.5l-1.17-1.5c-.34-.44-.78-.73-1.28-.85-.5-.12-1.05-.05-1.57.19l-.52.24c-.52.24-.97.62-1.28 1.1-.31.48-.48 1.05-.48 1.62v4.4c0 .57.17 1.14.48 1.62.31.48.76.86 1.28 1.1l.52.24c.52.24 1.07.31 1.57.19.5-.12.94-.41 1.28-.85l1.17-1.5z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 tracking-widest uppercase mb-1">Featuring</span>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
                <TypewriterText text="Galaxy S26 Ultra" delay={1.6} className="shimmer-text" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div ref={canvasRef} className="absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 2]}>
          <PhoneModels 
            iphoneRef={iphoneGroupRef} 
            samsungRef={samsungGroupRef}
          />
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
            Scroll to explore
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
