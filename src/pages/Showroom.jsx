import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const allPhones = [
  { id: 1, brand: 'Apple', name: "iPhone 15 Pro Max", price: "Rs. 395,000", imageUrl: "/phones/iPhone 15 Pro Max.jpg" },
  { id: 2, brand: 'Apple', name: "iPhone 15 Pro", price: "Rs. 345,000", imageUrl: "/phones/iPhone 15 Pro.png" },
  { id: 3, brand: 'Apple', name: "iPhone 15", price: "Rs. 285,000", imageUrl: "/phones/iPhone 15 pro.jpg" },
  { id: 4, brand: 'Apple', name: "iPhone 14 Pro Max", price: "Rs. 315,000", imageUrl: "/phones/iPhone 14 Pro Max.jpg" },
  { id: 5, brand: 'Apple', name: "iPhone 14", price: "Rs. 225,000", imageUrl: "/phones/iPhone 14.png" },
  { id: 6, brand: 'Samsung', name: "Galaxy S24 Ultra", price: "Rs. 395,000", imageUrl: "/phones/Galaxy S24 Ultra.jpg" },
  { id: 7, brand: 'Samsung', name: "Galaxy S24+", price: "Rs. 295,000", imageUrl: "/phones/Galaxy S24+.avif" },
  { id: 8, brand: 'Samsung', name: "Galaxy Z Fold 5", price: "Rs. 495,000", imageUrl: "/phones/Galaxy Z Fold 5.jpg" },
  { id: 9, brand: 'Samsung', name: "Galaxy Z Flip 5", price: "Rs. 295,000", imageUrl: "/phones/Galaxy Z Flip 5.jpg" },
  { id: 10, brand: 'Samsung', name: "Galaxy A55 5G", price: "Rs. 145,000", imageUrl: "/phones/Galaxy A55 5G.jpg" },
  { id: 11, brand: 'Google', name: "Pixel 8 Pro", price: "Rs. 275,000", imageUrl: "/phones/Pixel 8 pro.jpg" },
  { id: 12, brand: 'Google', name: "Pixel 8", price: "Rs. 195,000", imageUrl: "/phones/Pixel 8.jpg" },
  { id: 13, brand: 'OnePlus', name: "OnePlus 12", price: "Rs. 225,000", imageUrl: "/phones/OnePlus 12.jpg" },
  { id: 14, brand: 'Xiaomi', name: "Xiaomi 14 Ultra", price: "Rs. 285,000", imageUrl: "/phones/Xiaomi 14 Ultra.jpg" },
  { id: 15, brand: 'Vivo', name: "Vivo V30 Black", price: "Rs. 135,000", imageUrl: "/phones/vivo-V30-Black-512GB.jpg" },
  { id: 16, brand: 'Oppo', name: "Oppo Reno 11", price: "Rs. 145,000", imageUrl: "/phones/Reno 11 Pro.jpg" },
];

const brands = ['All', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo'];

export default function Showroom() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredPhones = allPhones.filter(phone => {
    const matchesBrand = selectedBrand === 'All' || phone.brand === selectedBrand;
    const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  const getBrandColor = (brand) => {
    const colors = {
      Apple: 'from-zinc-600 to-zinc-800',
      Samsung: 'from-blue-600 to-blue-800',
      Google: 'from-green-600 to-green-800',
      OnePlus: 'from-red-600 to-red-800',
      Xiaomi: 'from-orange-600 to-orange-800',
    };
    return colors[brand] || 'from-zinc-600 to-zinc-800';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                <span className="text-sm font-semibold text-white">AM</span>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">SHOWROOM</h1>
            <div className="w-24"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedBrand === brand
                      ? 'bg-white text-black'
                      : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-white/10'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-1">Browse Collection</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {selectedBrand === 'All' ? 'All Phones' : selectedBrand}
              <span className="text-zinc-500 ml-3">({filteredPhones.length})</span>
            </h2>
          </div>
        </div>

        {filteredPhones.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <svg className="w-16 h-16 text-zinc-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-zinc-500">No phones found</p>
            <p className="text-sm text-zinc-600 mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhones.map((phone) => (
              <div
                key={phone.id}
                className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-4 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500"
                onMouseEnter={() => setHoveredId(phone.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${getBrandColor(phone.brand)} text-white`}>
                  {phone.brand}
                </div>

                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={phone.imageUrl}
                    alt={phone.name}
                    className="h-64 w-full object-contain mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white truncate">{phone.name}</h3>
                  <p className="text-xl font-bold text-white">{phone.price}</p>
                  <button className="w-full mt-2 py-3 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
