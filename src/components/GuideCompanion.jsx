import React from 'react';
import { motion } from 'framer-motion';

const GuideCompanion = ({ message }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end gap-4 pointer-events-none">
      {message && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className="glass-panel p-4 mb-16 max-w-xs pointer-events-auto"
          style={{ border: '2px solid var(--geo-gold)' }}
        >
          <p className="text-sm font-medium italic">"{message}"</p>
          {/* Ornate corner decoration */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-geo-gold" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-geo-gold" />
        </motion.div>
      )}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
      >
        <img 
          src="/src/assets/images/arithmancer.png" 
          alt="Arithmancer Guide" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default GuideCompanion;
