import React, { useState } from 'react';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import BrandVault from './components/BrandVault';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const applePhones = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    color: 'Natural Titanium',
    storage: '256GB',
    price: '395,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pro-max-natural-titanium-back.png'
  },
  {
    id: 2,
    name: 'iPhone 15',
    color: 'Pink',
    storage: '128GB',
    price: '245,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pink-back.png'
  },
  {
    id: 3,
    name: 'iPhone 14 Pro',
    color: 'Deep Purple',
    storage: '256GB',
    price: '325,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-deep-purple-back.png'
  },
  {
    id: 4,
    name: 'iPhone 13',
    color: 'Midnight',
    storage: '128GB',
    price: '195,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-midnight-back.png'
  },
  {
    id: 5,
    name: 'iPhone 15 Plus',
    color: 'Blue',
    storage: '256GB',
    price: '295,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-plus-blue-back.png'
  },
  {
    id: 6,
    name: 'iPhone SE (3rd gen)',
    color: 'Starlight',
    storage: '64GB',
    price: '145,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-se-2022-starlight-back.png'
  },
  {
    id: 7,
    name: 'iPhone 14',
    color: 'Product Red',
    storage: '128GB',
    price: '225,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-productred-back.png'
  },
  {
    id: 8,
    name: 'iPhone 13 mini',
    color: 'Pink',
    storage: '128GB',
    price: '175,000',
    imageUrl: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-mini-pink-back.png'
  }
];

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
                    <div className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 h-full">
                      <div className="relative h-56 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={phone.imageUrl}
                          alt={phone.name}
                          className="h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <button className="absolute top-0 right-0 p-2 rounded-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-zinc-500 uppercase tracking-wide">{phone.color} • {phone.storage}</p>
                        <h3 className="text-lg font-semibold text-white">{phone.name}</h3>
                        <p className="text-xl font-bold text-white">Rs. {phone.price}</p>
                        <button className="w-full mt-3 py-3 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors">
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

          {/* 4. Product Showcase - Samsung Galaxy */}
          <section className="py-16 bg-gradient-to-b from-zinc-950 to-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Premium Collection</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Samsung Galaxy</h2>
                </div>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide">View All →</a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Galaxy S26 Ultra', color: 'Titanium Gray', storage: '512GB', price: '425,000', img: 'https://images.samsung.com/is/image/samsung/p6pim/lk/2401/gallery/lk-galaxy-s24-s928-sm-s928bztqslk-thumb-539325447?$344_344_PNG$' },
                  { name: 'Galaxy S26+', color: 'Black', storage: '256GB', price: '295,000', img: 'https://images.samsung.com/is/image/samsung/p6pim/lk/2401/gallery/lk-galaxy-s24-s928-sm-s928bztqslk-thumb-539325447?$344_344_PNG$' },
                  { name: 'Galaxy Z Fold 6', color: 'Navy', storage: '256GB', price: '495,000', img: 'https://images.samsung.com/is/image/samsung/p6pim/lk/2401/gallery/lk-galaxy-s24-s928-sm-s928bztqslk-thumb-539325447?$344_344_PNG$' },
                  { name: 'Galaxy Z Flip 6', color: 'Lavender', storage: '256GB', price: '295,000', img: 'https://images.samsung.com/is/image/samsung/p6pim/lk/2401/gallery/lk-galaxy-s24-s928-sm-s928bztqslk-thumb-539325447?$344_344_PNG$' },
                ].map((product, idx) => (
                  <div key={idx} className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
                    <div className="relative h-56 flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <button className="absolute top-0 right-0 p-2 rounded-full bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-zinc-500 uppercase tracking-wide">{product.color} • {product.storage}</p>
                      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                      <p className="text-xl font-bold text-white">Rs. {product.price}</p>
                      <button className="w-full mt-3 py-3 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
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
