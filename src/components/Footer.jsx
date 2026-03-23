import React, { useState } from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Shield, Truck, CreditCard } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative bg-[#06070c] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] text-black font-bold tracking-tighter">
                AM
              </div>
              <h3 className="text-xl font-bold tracking-widest uppercase text-white">Aura Mobile</h3>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6">
              Curating the world's most premium mobile experiences. Authentic devices, priority delivery, and unparalleled service since 2024.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Showroom</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">The Vault</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Trade-In</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Apple iPhone</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Samsung Galaxy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Google Pixel</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Returns</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Shield className="text-white" size={20} />
            </div>
            <div>
              <h5 className="text-white font-medium text-sm">100% Authentic</h5>
              <p className="text-zinc-500 text-xs">Guaranteed genuine products</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Truck className="text-white" size={20} />
            </div>
            <div>
              <h5 className="text-white font-medium text-sm">Fast Delivery</h5>
              <p className="text-zinc-500 text-xs">Nationwide in 24-48 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <CreditCard className="text-white" size={20} />
            </div>
            <div>
              <h5 className="text-white font-medium text-sm">Secure Payment</h5>
              <p className="text-zinc-500 text-xs">Multiple payment options</p>
            </div>
          </div>
        </div>

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
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
