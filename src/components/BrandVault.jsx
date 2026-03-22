import React, { useState } from 'react';
import { motion } from 'framer-motion';

const appleModels = ['iPhone 17 Pro Max', 'iPhone 16 Pro', 'iPhone 15'];
const samsungModels = ['Galaxy S26 Ultra', 'Galaxy Z Fold 6', 'Galaxy Z Flip 5'];

export default function BrandVault() {
  const [hoveredApple, setHoveredApple] = useState(null);
  const [hoveredSamsung, setHoveredSamsung] = useState(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#06070c] relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            The Vault.
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            Exclusive access to the most coveted tech on the planet. Choose your ecosystem.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Apple Section - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 relative glass rounded-[2rem] p-8 overflow-hidden group transition-all duration-500 hover:border-white/20">
            {/* Background Glow */}
            <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#dcc8aa]/10 blur-[100px] rounded-full group-hover:bg-[#dcc8aa]/20 transition-all duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#dcc8aa] mb-2">Designed in Cupertino</p>
                <div className="text-4xl font-bold text-white mb-8">Apple</div>
              </div>

              <div className="space-y-4">
                {appleModels.map((model) => (
                  <div 
                    key={model}
                    className="flex items-center justify-between border-b border-white/5 pb-4 cursor-pointer"
                    onMouseEnter={() => setHoveredApple(model)}
                    onMouseLeave={() => setHoveredApple(null)}
                  >
                    <span 
                      className={`text-xl transition-colors duration-300 ${hoveredApple === model ? 'text-[#dcc8aa]' : 'text-zinc-300'}`}
                    >
                      {model}
                    </span>
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-500 font-medium">
                      Explore ➔
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Image Preview (Abstract placeholder for Apple) */}
            <motion.div 
              className="absolute right-8 bottom-8 w-48 h-64 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10 hidden lg:block"
              animate={{ 
                y: hoveredApple ? -10 : 0, 
                rotate: hoveredApple ? 5 : 0,
                opacity: hoveredApple ? 1 : 0.4
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="absolute inset-2 border border-white/5 rounded-xl bg-black/50 backdrop-blur-md flex items-center justify-center text-center p-4">
                <span className="text-zinc-500 text-sm">{hoveredApple || 'Select Model'}</span>
              </div>
            </motion.div>
          </div>

          {/* Samsung Section */}
          <div className="relative glass rounded-[2rem] p-8 overflow-hidden group transition-all duration-500 hover:border-white/20">
            <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[60%] bg-[#78cfff]/10 blur-[90px] rounded-full group-hover:bg-[#78cfff]/20 transition-all duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#78cfff] mb-2">Galaxy AI is Here</p>
                <div className="text-4xl font-bold text-white mb-8">Samsung</div>
              </div>

              <div className="space-y-4">
                {samsungModels.map((model) => (
                  <div 
                    key={model}
                    className="flex items-center justify-between border-b border-white/5 pb-4 cursor-pointer"
                    onMouseEnter={() => setHoveredSamsung(model)}
                    onMouseLeave={() => setHoveredSamsung(null)}
                  >
                    <span 
                      className={`text-lg transition-colors duration-300 ${hoveredSamsung === model ? 'text-[#78cfff]' : 'text-zinc-300'}`}
                    >
                      {model}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Color Shift Animation layer */}
            <motion.div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              animate={{
                backgroundColor: hoveredSamsung ? 'rgba(120,207,255,0.05)' : 'rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
