import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TheVault() {
  const vaultItems = [
    {
      id: 1,
      name: "iPhone 15 Pro Max Titanium Gold",
      price: "Rs. 495,000",
      imageUrl: "/phones/iPhone 15 Pro Max.jpg",
      tag: "Limited Edition",
      description: "Exclusive 24K Gold Titanium finish"
    },
    {
      id: 2,
      name: "Galaxy Z Fold 5 Thom Browne",
      price: "Rs. 595,000",
      imageUrl: "/phones/Galaxy Z Fold 5.jpg",
      tag: "Designer Collab",
      description: "Signature Thom Browne styling"
    },
    {
      id: 3,
      name: "Vertu Constellation X",
      price: "Rs. 2,500,000",
      imageUrl: "/phones/Galaxy S24 Ultra.jpg",
      tag: "Ultra Premium",
      description: "Handcrafted Italian leather"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/5 via-transparent to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <div className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] text-black font-bold tracking-tighter">
                  AM
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Back to Home</span>
              </Link>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <h1 className="text-xl font-bold tracking-[0.3em] text-white">THE VAULT</h1>
              </div>
              <div className="w-24"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 text-xs uppercase tracking-[0.4em] font-medium">Exclusive Collection</span>
              <Crown className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              THE VAULT
            </h2>
            <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
              Discover our curated selection of limited edition and exclusive devices. 
              Each piece represents the pinnacle of mobile technology and design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vaultItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:shadow-[0_0_50px_rgba(234,179,8,0.25)]">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        <Sparkles className="w-3 h-3" />
                        {item.tag}
                      </motion.span>
                      <Lock className="w-4 h-4 text-zinc-600" />
                    </div>

                    <motion.div 
                      className="relative h-72 flex items-center justify-center mb-6 overflow-hidden"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                      />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">{item.name}</h3>
                    <p className="text-zinc-500 text-sm mb-4">{item.description}</p>
                    <p className="text-2xl font-bold text-amber-400 mb-6 tracking-tight">{item.price}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-transparent border border-amber-500/50 text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Inquire Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <Lock className="w-4 h-4 text-amber-400" />
              <span className="text-zinc-500 text-sm">More exclusive pieces arriving soon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
