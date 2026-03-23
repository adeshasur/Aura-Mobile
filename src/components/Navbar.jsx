import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function Navbar({ cartCount, isCartOpen, setIsCartOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-12 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] text-black font-bold tracking-tighter">
            AM
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] font-medium text-zinc-200">Aura Mobile</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          <Link to="/showroom" className="opacity-80 hover:opacity-100 hover:text-white transition-all duration-300">Showroom</Link>
          <Link to="/support" className="opacity-80 hover:opacity-100 hover:text-white transition-all duration-300">Support</Link>
        </div>

        <button 
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2.5 hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <ShoppingBag className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white uppercase tracking-wider">({cartCount})</span>
        </button>
      </div>
    </nav>
  );
}

export function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-6 left-1/2 z-[200] px-6 py-3 rounded-full bg-white text-black text-sm font-medium shadow-lg"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
