import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Clock, Send, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Support({ isCartOpen, setIsCartOpen }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const cartItems = JSON.parse(localStorage.getItem('aura-cart') || '[]');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <Navbar cartCount={cartItems.length} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        <main className="flex-1 flex flex-col items-center justify-center px-6 py-4">
          <div className="w-full max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14 mx-auto mb-4"
              >
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg" />
                <div className="relative w-full h-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <motion.div
                    animate={{ y: [0, -3, 0], rotateX: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Box className="w-6 h-6 text-white/50" />
                  </motion.div>
                </div>
              </motion.div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600 mb-2">Beyond Limits</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">GET IN TOUCH</h2>
              <p className="text-zinc-600 text-sm max-w-md mx-auto">Have a question? Our support team is here to help you 24/7.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-stretch gap-4"
            >
              <div className="flex-1 p-8 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex flex-col">
                <h3 className="text-xs font-medium text-zinc-600 uppercase tracking-[0.15em] mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                  <div className="space-y-5 flex-1">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-600 block mb-2">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-600 block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-600 block mb-2">Message</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="How can we help you?"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full mt-6 py-3 rounded-lg bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-3 h-3" />
                  </motion.button>
                </form>
              </div>

              <div className="flex-1 p-8 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 flex flex-col">
                <h3 className="text-xs font-medium text-zinc-600 uppercase tracking-[0.15em] mb-6">Quick Contact</h3>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-wider">Call Us</p>
                        <p className="text-sm text-white">+92 300 1234567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-wider">Email</p>
                        <p className="text-sm text-white">support@auramobile.pk</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-wider">Hours</p>
                        <p className="text-sm text-white">Mon-Sat, 9AM - 9PM</p>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full mt-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start Live Chat
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
