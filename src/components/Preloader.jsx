import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const auraWords = ['Design', 'Power', 'Elegance', 'Beyond', 'Aura'];

export default function Preloader({ onFinish }) {
  const [percent, setPercent] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const wordTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % auraWords.length);
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, []);

  useEffect(() => {
    if (percent === 100) {
      setTimeout(() => {
        onFinish();
      }, 800);
    }
  }, [percent, onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[300px]">
        {/* Animated Words */}
        <div className="h-12 flex items-center justify-center overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={auraWords[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-2xl font-semibold tracking-[0.4em] uppercase text-zinc-400"
            >
              {auraWords[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Percentage Counter */}
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Aura Loading</span>
          <span className="text-4xl font-light text-white tracking-tighter">
            {percent}<span className="text-sm ml-1 text-zinc-500">%</span>
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Cinematic Aura Logo (Fading In) */}
      <motion.div 
        className="absolute bottom-12 flex items-center gap-3 opacity-0"
        animate={{ opacity: percent > 50 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold">AM</div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Aura Mobile &copy; 2026</p>
      </motion.div>
    </div>
  );
}
