import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Clock, ChevronDown, Send } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] text-black font-bold tracking-tighter">
                  AM
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Back to Home</span>
              </Link>
              <h1 className="text-xl font-bold tracking-[0.3em] text-white">SUPPORT</h1>
              <div className="w-24"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </h2>
            <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
              Have a question or need assistance? Our support team is here to help you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 tracking-tight">
                <Mail className="w-5 h-5 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                Contact Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-[0.15em]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className={`w-full bg-white/[0.03] border rounded-xl py-3.5 px-4 text-white placeholder:text-zinc-600 transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                        : 'border-white/10'
                    }`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-[0.15em]">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className={`w-full bg-white/[0.03] border rounded-xl py-3.5 px-4 text-white placeholder:text-zinc-600 transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                        : 'border-white/10'
                    }`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-[0.15em]">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className={`w-full bg-white/[0.03] border rounded-xl py-3.5 px-4 text-white placeholder:text-zinc-600 transition-all duration-300 resize-none ${
                      focusedField === 'message' 
                        ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                        : 'border-white/10'
                    }`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 text-white font-semibold text-sm uppercase tracking-[0.15em] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-5 flex items-center gap-3 tracking-tight">
                  <MessageCircle className="w-5 h-5 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-green-500/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Call Us</p>
                      <p className="text-white font-medium">+92 300 1234567</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</p>
                      <p className="text-white font-medium">support@auramobile.pk</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Working Hours</p>
                      <p className="text-white font-medium">Mon-Sat, 9AM - 9PM</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-white/10 text-white font-semibold text-sm uppercase tracking-[0.15em] hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Start Live Chat
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold mb-6 tracking-tight">Frequently Asked Questions</h3>
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
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
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
                    <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
