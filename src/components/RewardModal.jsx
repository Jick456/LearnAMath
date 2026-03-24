import React from 'react';
import './components.css';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti';

export default function RewardModal({ show, onClose, title, rewardText, rewardImage }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[6000] p-6">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />
            
            <Confetti />

            <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="glass-panel p-10 md:p-14 max-w-[500px] w-full text-center relative z-10"
                style={{ border: '2px solid var(--geo-gold)' }}
            >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-geo-gold rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.5)]">
                    <span className="text-4xl text-black">✨</span>
                </div>

                <h2 className="glow-text text-4xl font-black mt-4 mb-6 uppercase tracking-wider">{title}</h2>

                <div className="relative my-8">
                    <div className="absolute inset-0 blur-3xl opacity-20 rounded-full bg-geo-gold animate-pulse" />
                    {rewardImage ? (
                        <img src={rewardImage} alt="Reward" className="w-[180px] h-auto object-contain mx-auto relative z-10 drop-shadow-2xl" />
                    ) : (
                        <div className="text-6xl relative z-10">🌟</div>
                    )}
                </div>

                <p className="text-xl font-medium opacity-80 mb-10 leading-relaxed">
                    {rewardText}
                </p>

                <button 
                    className="genshin-btn w-full py-4 text-xl" 
                    onClick={onClose}
                    style={{ background: 'var(--geo-gold)', color: 'black' }}
                >
                    Claim Resonance
                </button>
            </motion.div>
        </div>
    );
}
