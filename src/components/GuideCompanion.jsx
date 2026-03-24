import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GuideCompanion = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[2000] flex items-center justify-center pointer-events-none"
        >
          {/* Sleek aesthetic toast */}
          <div className="glass-panel flex items-center gap-5 px-6 py-4 rounded-full pointer-events-auto backdrop-blur-xl" 
               style={{ 
                 border: '1.5px solid rgba(251, 191, 36, 0.5)', 
                 background: 'rgba(5, 8, 15, 0.85)',
                 boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(251, 191, 36, 0.15)'
               }}>
               
            <div className="w-12 h-12 overflow-hidden rounded-full flex-shrink-0 border-2 border-geo-gold relative bg-black flex items-center justify-center" style={{ boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)' }}>
              <img 
                src="/src/assets/images/arithmancer.png" 
                alt="Arithmancer Guide" 
                className="w-[180%] h-[180%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%]"
                style={{ mixBlendMode: 'screen', filter: 'contrast(1.1) brightness(1.2)' }}
              />
            </div>

            <p className="text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--geo-gold)' }}>
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GuideCompanion;
