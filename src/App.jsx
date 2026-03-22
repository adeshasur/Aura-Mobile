import React, { useState } from 'react';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import BrandVault from './components/BrandVault';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#000000] text-[#f6efe7] selection:bg-white/20 selection:text-white font-sans cursor-default">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-12 flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] text-black font-bold tracking-tighter">
                AM
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] font-medium text-zinc-200">Aura Mobile</p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Showroom</a>
              <a href="#" className="hover:text-white transition-colors">The Vault</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>

            {/* CTA */}
            <button className="rounded-full bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Cart (0)
            </button>
          </div>
        </nav>

        <main>
          {/* 1. Hero Section (The Ultimate Face-Off) */}
          <Hero />

          {/* 2. Brand Showcase Section */}
          <section className="relative py-20 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 text-center mb-12">
                Featured Brands
              </p>
              
              <div className="relative overflow-hidden">
                <div className="flex gap-16 animate-marquee">
                  {[
                    { name: 'Apple', src: '/logos/apple.png' },
                    { name: 'Samsung', src: '/logos/samsung.png' },
                    { name: 'Xiaomi', src: '/logos/xiaomi.png' },
                    { name: 'Huawei', src: '/logos/huawei.png' },
                    { name: 'Oppo', src: '/logos/oppo.png' },
                    { name: 'Vivo', src: '/logos/vivo.png' },
                    { name: 'OnePlus', src: '/logos/oneplus.png' },
                    { name: 'Nokia', src: '/logos/nokia.png' },
                    { name: 'Sony', src: '/logos/sony.png' },
                    { name: 'Google', src: '/logos/google.png' },
                  ].concat([
                    { name: 'Apple', src: '/logos/apple.png' },
                    { name: 'Samsung', src: '/logos/samsung.png' },
                    { name: 'Xiaomi', src: '/logos/xiaomi.png' },
                    { name: 'Huawei', src: '/logos/huawei.png' },
                    { name: 'Oppo', src: '/logos/oppo.png' },
                    { name: 'Vivo', src: '/logos/vivo.png' },
                    { name: 'OnePlus', src: '/logos/oneplus.png' },
                    { name: 'Nokia', src: '/logos/nokia.png' },
                    { name: 'Sony', src: '/logos/sony.png' },
                    { name: 'Google', src: '/logos/google.png' },
                  ]).map((brand, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 group cursor-pointer"
                    >
                      <div className="relative w-32 h-16 flex items-center justify-center">
                        <img
                          src={brand.src}
                          alt={brand.name}
                          className="h-8 w-auto object-contain brightness-0 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML += `<span class="text-xl font-semibold text-zinc-600 group-hover:text-white transition-colors">${brand.name}</span>`;
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </section>

          {/* 3. Next Section - Scroll Animation Demo */}
          <section className="relative h-screen bg-gradient-to-b from-black via-zinc-950 to-black flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 text-center max-w-4xl px-6">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Experience the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Difference</span>
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                Two flagship giants, one ultimate choice. Discover which premium smartphone suits your lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-white text-black font-semibold uppercase text-sm tracking-widest hover:scale-105 transition-transform">
                  Compare Models
                </button>
                <button className="px-8 py-4 rounded-full border border-zinc-700 text-white font-semibold uppercase text-sm tracking-widest hover:bg-white/10 transition-colors">
                  View Specifications
                </button>
              </div>
            </div>
          </section>

          {/* 4. Brands Marquee */}
          <BrandsMarquee />

          {/* 5. Brand Vault */}
          <BrandVault />
        </main>

        {/* 4. Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
