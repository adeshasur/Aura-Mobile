import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import BrandVault from './components/BrandVault';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Showroom from './pages/Showroom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const applePhones = [
  { id: 1, name: "iPhone 15 Pro Max", price: "Rs. 395,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+15+Pro+Max" },
  { id: 2, name: "iPhone 15 Pro", price: "Rs. 345,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+15+Pro" },
  { id: 3, name: "iPhone 15", price: "Rs. 285,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+15" },
  { id: 4, name: "iPhone 14 Pro Max", price: "Rs. 315,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+14+Pro+Max" },
  { id: 5, name: "iPhone 14 Pro", price: "Rs. 275,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+14+Pro" },
  { id: 6, name: "iPhone 14", price: "Rs. 225,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+14" },
  { id: 7, name: "iPhone 13 Pro Max", price: "Rs. 255,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+13+Pro+Max" },
  { id: 8, name: "iPhone 13", price: "Rs. 185,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+13" },
  { id: 9, name: "iPhone 12 Pro", price: "Rs. 165,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+12+Pro" },
  { id: 10, name: "iPhone SE (3rd Gen)", price: "Rs. 125,000", imageUrl: "https://placehold.co/600x600/1a1a1a/fff?text=iPhone+SE" }
];

const samsungPhones = [
  { id: 1, name: "Galaxy S24 Ultra", price: "Rs. 395,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+S24+Ultra" },
  { id: 2, name: "Galaxy S24+", price: "Rs. 295,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+S24%2B" },
  { id: 3, name: "Galaxy Z Fold 5", price: "Rs. 495,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+Z+Fold+5" },
  { id: 4, name: "Galaxy Z Flip 5", price: "Rs. 295,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+Z+Flip+5" },
  { id: 5, name: "Galaxy S23 Ultra", price: "Rs. 345,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+S23+Ultra" },
  { id: 6, name: "Galaxy S23+", price: "Rs. 265,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+S23%2B" },
  { id: 7, name: "Galaxy A55 5G", price: "Rs. 145,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+A55+5G" }, 
  { id: 8, name: "Galaxy A35 5G", price: "Rs. 115,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+A35+5G" }, 
  { id: 9, name: "Galaxy A25 5G", price: "Rs. 75,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+A25+5G" }, 
  { id: 10, name: "Galaxy A15 5G", price: "Rs. 55,000", imageUrl: "https://placehold.co/600x600/1a1a2a/fff?text=Galaxy+A15+5G" } 
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showroom" element={<Showroom />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-[#000000] text-[#f6efe7] selection:bg-white/20 selection:text-white font-sans cursor-default">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-12 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] text-black font-bold tracking-tighter">
                AM
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] font-medium text-zinc-200">Aura Mobile</p>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              <Link to="/showroom" className="hover:text-white transition-colors">Showroom</Link>
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
          <section className="relative py-16 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 text-center mb-10">
                Featured Brands
              </p>
              
              <div className="relative overflow-hidden">
                <div className="flex gap-12 animate-marquee">
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
                      <div className="relative h-12 w-36 flex items-center justify-center">
                        <img
                          src={brand.src}
                          alt={brand.name}
                          className="h-10 w-auto object-contain brightness-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML += `<span class="text-lg font-semibold text-zinc-600 group-hover:text-white transition-colors whitespace-nowrap">${brand.name}</span>`;
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

          {/* 3. Product Showcase - Apple iPhone Slider */}
          <section className="py-16 bg-gradient-to-b from-black to-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Premium Collection</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Apple iPhone</h2>
                </div>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide">View All →</a>
              </div>
            </div>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="!px-6"
              >
                {applePhones.map((phone) => (
                  <SwiperSlide key={phone.id}>
                    <div className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-4 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 h-full">
                      <div className="relative h-64 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/30 to-transparent">
                        <img
                          src={phone.imageUrl}
                          alt={phone.name}
                          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                        <button className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{phone.name}</h3>
                        <p className="text-xl font-bold text-white">{phone.price}</p>
                        <button className="w-full mt-4 py-3.5 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </section>

          {/* 4. Product Showcase - Samsung Galaxy Slider */}
          <section className="py-16 bg-gradient-to-b from-zinc-950 to-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Premium Collection</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Samsung Galaxy</h2>
                </div>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide">View All →</a>
              </div>
            </div>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom-samsung',
                  prevEl: '.swiper-button-prev-custom-samsung',
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="!px-6"
              >
                {samsungPhones.map((phone) => (
                  <SwiperSlide key={phone.id}>
                    <div className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-4 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 h-full">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={phone.imageUrl}
                          alt={phone.name}
                          className="h-64 w-full object-contain mb-6 transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <button className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{phone.name}</h3>
                        <p className="text-xl font-bold text-white">{phone.price}</p>
                        <button className="w-full mt-4 py-3.5 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="swiper-button-prev-custom-samsung absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next-custom-samsung absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </section>

          {/* 5. Next Section - Scroll Animation Demo */}
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

          {/* 6. Brands Marquee */}
          <BrandsMarquee />
        </main>

        {/* 4. Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
