import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

export default function AccountSetup({ onComplete }) {
    const [selectedLevel, setSelectedLevel] = useState(null);

    const levels = [
        { id: 'G1', label: 'Axiom Foundation', color: 'var(--emerald-green)', icon: '📖', desc: 'Focus on core principles and fundamental proofs.' },
        { id: 'G2', label: 'Standard Resonance', color: 'var(--celestial-blue)', icon: '⚖️', desc: 'Balanced logic and structured problem solving.' },
        { id: 'G3', label: 'Advanced Ascension', color: 'var(--geo-gold)', icon: '⚡', desc: 'Complex derivations and abstract concepts.' }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[90vh] py-12 px-6">
            <motion.div 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 relative"
            >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-geo-gold opacity-10 blur-[80px] rounded-full pointer-events-none" />
                <h2 className="premium-heading mb-6" data-text="Select Your Path" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
                    Select Your Path
                </h2>
                <p className="opacity-60 text-xl max-w-[650px] mx-auto font-medium leading-relaxed">
                    Resonate with the mathematical stream that aligns with your current scholar grade. 
                    Your journey can be recalibrated as you ascend.
                </p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px] mb-20"
            >
                {levels.map(lvl => {
                    const isActive = selectedLevel === lvl.id;
                    return (
                        <motion.div
                            key={lvl.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, translateY: -10 }}
                            whileTap={{ scale: 0.98 }}
                            className={`glass-panel p-10 cursor-pointer transition-all duration-500 relative flex flex-col items-center text-center group ${isActive ? 'active-level' : 'opacity-70 hover:opacity-100'}`}
                            style={{ 
                                perspective: '1000px',
                                border: isActive ? `2px solid ${lvl.color}` : '1px solid var(--surface-border)',
                                boxShadow: isActive ? `0 25px 50px -12px ${lvl.color}44` : 'none',
                                background: isActive ? `linear-gradient(135deg, var(--surface) 0%, ${lvl.color}08 100%)` : 'var(--surface)'
                            }}
                            onClick={() => setSelectedLevel(lvl.id)}
                        >
                            {/* Elemental Background Glow */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at center, ${lvl.color} 0%, transparent 70%)` }}
                            />

                            <div className="relative mb-8">
                                <div 
                                    className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity"
                                    style={{ background: lvl.color }}
                                />
                                <span className="text-8xl block relative transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl">
                                    {lvl.icon}
                                </span>
                            </div>

                            <h3 className="mb-2 uppercase tracking-widest font-black" style={{ color: lvl.color, fontSize: '1.4rem' }}>{lvl.label}</h3>
                            <div className="font-bold opacity-30 uppercase tracking-[4px] text-[10px] mb-6">{lvl.id} Stream</div>
                            <p className="text-sm opacity-60 leading-relaxed font-medium">
                                {lvl.desc}
                            </p>

                            {isActive && (
                                <motion.div 
                                    layoutId="activeGlow"
                                    className="absolute -inset-[1px] rounded-[inherit] pointer-events-none"
                                    style={{ border: `2px solid ${lvl.color}`, zIndex: 1 }}
                                />
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                    opacity: selectedLevel ? 1 : 0.3, 
                    scale: selectedLevel ? 1 : 0.95,
                    y: selectedLevel ? 0 : 10
                }}
                className="genshin-btn genshin-btn-premium px-24 py-6 text-2xl uppercase tracking-[0.2em] font-black"
                disabled={!selectedLevel}
                onClick={() => onComplete(selectedLevel)}
                style={{ 
                   cursor: selectedLevel ? 'pointer' : 'not-allowed',
                   filter: selectedLevel ? 'none' : 'grayscale(0.5)'
                }}
            >
                Confirm Path
            </motion.button>
        </div>
    );
}
