import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Clock, ChevronDown, Send } from 'lucide-react';

export default function Support() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

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
    <div className="min-h-screen bg-[#050507] text-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
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
            <h1 className="text-xl font-bold tracking-wider">SUPPORT</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">GET IN TOUCH</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a question or need assistance? Our support team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Call Us</p>
                    <p className="text-white font-medium">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email Us</p>
                    <p className="text-white font-medium">support@auramobile.pk</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Working Hours</p>
                    <p className="text-white font-medium">Mon-Sat, 9AM - 9PM</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Start Live Chat
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-4 pb-4 text-zinc-400 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
