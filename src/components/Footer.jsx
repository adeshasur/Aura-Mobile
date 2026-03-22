import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative bg-[#06070c] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-widest uppercase text-white mb-6">Aura Mobile</h3>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Curating the world's most premium mobile experiences. Authentic devices, priority delivery, and unparalleled service.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Apple Collection</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Samsung Galaxy</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Google Pixel</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Shipping Policy</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Returns & Exchanges</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors duration-300">Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-white/10 pt-10 gap-8">
          
          <div className="w-full lg:w-auto">
            <h4 className="text-sm font-medium text-white mb-4">Stay updated on new releases.</h4>
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center max-w-md w-full"
            >
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:scale-105 transition-transform"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          <div className="text-xs text-zinc-500 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p>&copy; {new Date().getFullYear()} Aura Mobile. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
