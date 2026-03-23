import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Clock, ChevronDown, Send, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Support() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer free standard shipping (3-5 business days) and express delivery (24-48 hours) for all orders. Same-day delivery is available in select cities."
    },
    {
      question: "What warranty do you provide?",
      answer: "All devices come with a 1-year official manufacturer warranty. We also offer extended warranty plans up to 2 additional years."
    },
    {
      question: "What are your support hours?",
      answer: "Our customer support team is available Monday to Saturday, 9 AM to 9 PM. For urgent matters, reach us via WhatsApp anytime."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/3 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/2 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-28 h-28 mx-auto mb-8"
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl" />
                <div className="relative w-full h-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <motion.div
                    animate={{ y: [0, -8, 0], rotateX: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ perspective: 500 }}
                  >
                    <Box className="w-12 h-12 text-white/60" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4"
              >
                Beyond Limits
              </motion.p>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-white">
                GET IN TOUCH
              </h2>
              <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
                Have a question or need assistance? Our support team is here to help you 24/7.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                  <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-[0.15em] mb-8">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-wider text-zinc-500">Name</span>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-300"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          borderBottomColor: focusedField === 'name' ? 'rgba(255,255,255,0.5)' : undefined,
                        }}
                      />
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-wider text-zinc-500">Email</span>
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-300"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          borderBottomColor: focusedField === 'email' ? 'rgba(255,255,255,0.5)' : undefined,
                        }}
                      />
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-wider text-zinc-500">Message</span>
                      </div>
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-300 resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          borderBottomColor: focusedField === 'message' ? 'rgba(255,255,255,0.5)' : undefined,
                        }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-[0.15em] hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2 space-y-4"
              >
                <div className="p-5 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Call Us</p>
                      <p className="text-white font-medium">+92 300 1234567</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</p>
                      <p className="text-white font-medium">support@auramobile.pk</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Working Hours</p>
                      <p className="text-white font-medium">Mon-Sat, 9AM - 9PM</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium text-sm uppercase tracking-[0.15em] hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Start Live Chat
                </motion.button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10"
            >
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-[0.15em] mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: openFaq === index ? 'auto' : 0,
                        opacity: openFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
