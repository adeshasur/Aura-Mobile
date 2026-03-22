import React from 'react';
import { motion } from 'framer-motion';

const topBrands = [
  { name: 'Apple', logo: '', theme: 'rgba(220,200,170,0.6)' },
  { name: 'Samsung', logo: 'SAMSUNG', theme: 'rgba(120,207,255,0.6)' },
  { name: 'Google', logo: 'G', theme: 'rgba(185,223,118,0.6)' },
  { name: 'Xiaomi', logo: 'mi', theme: 'rgba(255,103,0,0.6)' },
  { name: 'OnePlus', logo: '1+', theme: 'rgba(255,0,0,0.6)' },
];

export default function BrandsMarquee() {
  // Simple infinite marquee effect using framer-motion
  return (
    <section className="relative py-24 overflow-hidden border-t border-b border-white/5 bg-[#06070c] z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#06070c] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#06070c] to-transparent z-10" />
      </div>
      
      <div className="flex w-[200%] gap-16 md:gap-32">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        >
          {/* Double the list to create seamless infinite scroll */}
          {[...topBrands, ...topBrands].map((brand, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            >
              <span 
                className="text-4xl md:text-6xl font-bold text-zinc-600 group-hover:text-white transition-colors duration-500"
                style={{
                  textShadow: '0 0 0px transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = `0 0 20px ${brand.theme}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 0px transparent';
                }}
              >
                {brand.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
