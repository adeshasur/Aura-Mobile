import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar, { Toast } from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import BrandsMarquee from './components/BrandsMarquee';
import Footer from './components/Footer';
import Showroom from './pages/Showroom';
import Support from './pages/Support';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const applePhones = [
  { id: 1, name: "iPhone 15 Pro Max", price: "Rs. 395,000", imageUrl: "/phones/iPhone 15 Pro Max.jpg" },
  { id: 2, name: "iPhone 15 Pro", price: "Rs. 345,000", imageUrl: "/phones/iPhone 15 pro.jpg" },
  { id: 3, name: "iPhone 15", price: "Rs. 285,000", imageUrl: "/phones/iPhone 15 pro.jpg" },
  { id: 4, name: "iPhone 14 Pro Max", price: "Rs. 315,000", imageUrl: "/phones/iPhone 14 Pro Max.jpg" },
  { id: 5, name: "iPhone 14", price: "Rs. 225,000", imageUrl: "/phones/iPhone 14.jpg" },
  { id: 6, name: "iPhone 16", price: "Rs. 325,000", imageUrl: "/phones/iPhone-16.jpg" },
];

const samsungPhones = [
  { id: 1, name: "Galaxy S24 Ultra", price: "Rs. 395,000", imageUrl: "/phones/Galaxy S24 Ultra.jpg" },
  { id: 2, name: "Galaxy S24+", price: "Rs. 295,000", imageUrl: "/phones/Galaxy S24+.avif" },
  { id: 3, name: "Galaxy Z Fold 5", price: "Rs. 495,000", imageUrl: "/phones/Galaxy Z Fold 5.jpg" },
  { id: 4, name: "Galaxy Z Flip 5", price: "Rs. 295,000", imageUrl: "/phones/Galaxy Z Flip 5.jpg" },
  { id: 5, name: "Galaxy A55 5G", price: "Rs. 145,000", imageUrl: "/phones/Galaxy A55 5G.jpg" },
];

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('aura-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('aura-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (phone) => {
    setCart(prev => [...prev, phone]);
    setToast({ visible: true, message: `${phone.name} added to cart` });
    setTimeout(() => setToast({ visible: false, message: '' }), 2000);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} addToCart={addToCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />} />
        <Route path="/showroom" element={<Showroom addToCart={addToCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />} />
        <Route path="/support" element={<Support isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />} />
      </Routes>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} removeFromCart={removeFromCart} />
      <Toast message={toast.message} isVisible={toast.visible} />
    </Router>
  );
}

function HomePage({ cart, addToCart, isCartOpen, setIsCartOpen }) {
  return (
    <>
      <div className="min-h-screen bg-[#000000] text-[#f6efe7] selection:bg-white/20 selection:text-white font-sans cursor-default">
        <Navbar cartCount={cart.length} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        <main>
          <Hero />

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
                    <div key={idx} className="flex-shrink-0 group cursor-pointer">
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

          <section className="py-16 bg-gradient-to-b from-black to-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Premium Collection</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Apple iPhone</h2>
                </div>
                <Link to="/showroom" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide">View All →</Link>
              </div>
            </div>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                loop={true}
                navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
                className="!px-6"
              >
                {applePhones.map((phone) => (
                  <SwiperSlide key={phone.id}>
                    <div className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-4 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 h-full">
                      <div className="relative h-64 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/30 to-transparent">
                        <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-zinc-600 to-zinc-800 text-white bg-opacity-90">Apple</span>
                        <img src={phone.imageUrl} alt={phone.name} className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 z-10" />
                        <button className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{phone.name}</h3>
                        <p className="text-xl font-bold text-white">{phone.price}</p>
                        <button onClick={() => addToCart(phone)} className="w-full mt-4 py-3.5 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
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

          <section className="py-16 bg-gradient-to-b from-zinc-950 to-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2">Premium Collection</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Samsung Galaxy</h2>
                </div>
                <Link to="/showroom" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide">View All →</Link>
              </div>
            </div>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                loop={true}
                navigation={{ nextEl: '.swiper-button-next-custom-samsung', prevEl: '.swiper-button-prev-custom-samsung' }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
                className="!px-6"
              >
                {samsungPhones.map((phone) => (
                  <SwiperSlide key={phone.id}>
                    <div className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-4 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 h-full">
                      <div className="relative overflow-hidden rounded-xl">
                        <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-opacity-90">Samsung</span>
                        <img src={phone.imageUrl} alt={phone.name} className="h-64 w-full object-contain mb-6 transition-transform duration-500 ease-in-out group-hover:scale-110 z-10" />
                        <button className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{phone.name}</h3>
                        <p className="text-xl font-bold text-white">{phone.price}</p>
                        <button onClick={() => addToCart(phone)} className="w-full mt-4 py-3.5 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
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

          <BrandsMarquee />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
