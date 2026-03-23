import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Crown, Sparkles, ArrowRight } from 'lucide-react';

export default function TheVault() {
  const [hoveredId, setHoveredId] = useState(null);

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
    <div className="min-h-screen bg-[#050507] text-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="sticky top-0 z-50 bg-[#050507]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                <span className="text-sm font-semibold text-white">AM</span>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <h1 className="text-xl font-bold tracking-wider">THE VAULT</h1>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-amber-400" />
            <span className="text-amber-400 text-sm uppercase tracking-[0.3em]">Exclusive Collection</span>
            <Crown className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            THE VAULT
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover our curated selection of limited edition and exclusive devices. 
            Each piece in The Vault represents the pinnacle of mobile technology and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vaultItems.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 rounded-2xl blur opacity-30 transition-opacity duration-500 ${hoveredId === item.id ? 'opacity-60' : 'opacity-0'}`} />
              
              <div className="relative bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30">
                      <Sparkles className="w-3 h-3" />
                      {item.tag}
                    </span>
                    <Lock className="w-4 h-4 text-zinc-600" />
                  </div>

                  <div className="relative h-64 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-zinc-500 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-amber-400 mb-4">{item.price}</p>
                  
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="text-zinc-400 text-sm">More exclusive pieces arriving soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
