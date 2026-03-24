import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCharacterStage } from '../data/characters';

const GuideCompanion = ({ message, activeCharacter, level }) => {
  const currentStage = getCharacterStage(activeCharacter, level);
  const petImage = currentStage?.image || activeCharacter?.image;
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
               
            <div className="w-8 h-8 overflow-hidden rounded-full flex-shrink-0 border border-geo-gold relative bg-black/50 flex items-center justify-center auto-margin" style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 0.2)' }}>
              {petImage && (
                <img 
                  src={petImage} 
                  alt="Guide" 
                  className="w-[120%] h-[120%] object-contain drop-shadow-md"
                />
              )}
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
