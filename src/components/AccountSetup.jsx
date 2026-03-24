import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

export default function AccountSetup({ onComplete }) {
    const [selectedLevel, setSelectedLevel] = useState(null);

    const levels = [
        { id: 'G1', label: 'Axiom Foundation', color: 'var(--emerald-green)', icon: '📖', desc: 'Focus on core principles and fundamental proofs.' },
        { id: 'G2', label: 'Standard Resonance', color: 'var(--celestial-blue)', icon: '⚖️', desc: 'Balanced logic and structured problem solving.' },
        { id: 'G3', label: 'Advanced Ascension', color: 'var(--geo-gold)', icon: '⚡', desc: 'Complex derivations and abstract concepts.' }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full py-20" style={{ minHeight: '85vh' }}>
            <div className="text-center mb-12">
               <h2 className="glow-text mb-4" style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase' }}>Select Your Path</h2>
               <p className="opacity-70 text-lg max-w-[600px] mx-auto">
                   Choose the mathematical resonance that best aligns with your current scholar stream. This can be recalibrated later.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px] px-6 mb-16">
                {levels.map(lvl => {
                    const isActive = selectedLevel === lvl.id;
                    return (
                        <div
                            key={lvl.id}
                            className={`glass-panel p-8 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${isActive ? 'scale-105' : 'hover:scale-102 opacity-70 hover:opacity-100'}`}
                            style={{ 
                              border: isActive ? `3px solid ${lvl.color}` : '1px solid rgba(255,255,255,0.1)',
                              boxShadow: isActive ? `0 20px 60px ${lvl.color}33` : 'none'
                            }}
                            onClick={() => setSelectedLevel(lvl.id)}
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute top-[-20px] right-[-20px] text-8xl opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform">
                                {lvl.icon}
                            </div>

                            <span className="text-6xl mb-6 block drop-shadow-lg">{lvl.icon}</span>
                            <h3 className="mb-2" style={{ color: lvl.color, fontSize: '1.6rem', fontWeight: 800 }}>{lvl.label}</h3>
                            <div className="font-bold opacity-40 uppercase tracking-tighter text-xs mb-4">{lvl.id} Stream</div>
                            <p className="text-sm opacity-60 leading-relaxed min-h-[60px]">
                                {lvl.desc}
                            </p>

                            {isActive && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: lvl.color }} />
                            )}
                        </div>
                    );
                })}
            </div>

            <button
                className="genshin-btn px-20 py-4 text-2xl"
                disabled={!selectedLevel}
                onClick={() => onComplete(selectedLevel)}
                style={{ 
                  opacity: selectedLevel ? 1 : 0.4,
                  transform: selectedLevel ? 'scale(1)' : 'scale(0.95)',
                  animation: selectedLevel ? 'pulse-glow 2s infinite' : 'none'
                }}
            >
                Confirm Path
            </button>
        </div>
    );
}
