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

          {/* 2. Brands Showcase */}
          <BrandsMarquee />

          {/* 3. Brand Vault */}
          <BrandVault />
        </main>

        {/* 4. Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
