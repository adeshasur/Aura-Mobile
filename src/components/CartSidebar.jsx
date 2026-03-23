import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CartSidebar({ isOpen, onClose, cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + price;
  }, 0);

  const formatPrice = (price) => {
    return 'Rs. ' + price.toLocaleString();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-black/90 backdrop-blur-2xl border-l border-white/10 z-[200] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                Your Cart
                <span className="text-xs text-zinc-500 font-normal">({cart.length})</span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-zinc-800 mb-4" />
                  <p className="text-zinc-500 text-lg mb-2">Your cart is empty</p>
                  <p className="text-zinc-600 text-sm">Add some premium devices to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                    >
                      <div className="w-20 h-20 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white truncate">{item.name}</h3>
                        <p className="text-sm font-semibold text-zinc-400 mt-1">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="p-2 rounded-lg hover:bg-red-500/20 transition-colors self-start"
                      >
                        <Trash2 className="w-4 h-4 text-zinc-500 hover:text-red-400" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Total</span>
                  <span className="text-2xl font-bold text-white">{formatPrice(total)}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
