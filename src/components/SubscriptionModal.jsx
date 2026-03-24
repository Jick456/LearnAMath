import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SubscriptionModal({ show, onClose, onUpgrade }) {
    if (!show) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 flex items-center justify-center z-[7000] p-6">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    onClick={onClose}
                />
                
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="glass-panel p-10 md:p-14 max-w-[600px] w-full text-center relative z-10"
                    style={{ border: '2px solid var(--celestial-blue)' }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-40 hover:opacity-100 transition-all font-bold"
                    >
                        ✕
                    </button>

                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 blur-3xl opacity-20 bg-celestial-blue animate-pulse rounded-full" />
                        <span className="text-7xl relative z-10">💎</span>
                    </div>

                    <h2 className="glow-text text-4xl font-black mb-4 uppercase tracking-widest">Axiom Ascension</h2>
                    <p className="opacity-70 text-lg mb-10">
                        Unlock the full potential of your mathematical resonance. Access all domains and secure your rank among the masters.
                    </p>

                    <div className="text-left bg-white/5 rounded-3xl p-8 mb-10 border border-white/10">
                        <ul className="flex flex-col gap-5" style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                'Unlock all Sec 1-4 & Additional Math Domains',
                                'Infinite Practice Questions & Mock Rituals',
                                'Exclusive Legendary Axiom Companion Skins',
                                'Detailed Mastery Analytics & Prophecy Reports'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-4" style={{ display: 'flex' }}>
                                    <span className="w-6 h-6 rounded-full bg-emerald-green/20 text-emerald-green flex items-center justify-center text-sm shrink-0 mt-1">✓</span>
                                    <span className="opacity-90 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            className="genshin-btn w-full py-5 text-2xl"
                            onClick={onUpgrade}
                            style={{ 
                              background: 'var(--celestial-blue)', 
                              color: 'white',
                              boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)'
                            }}
                        >
                            Ascend for $19.99/mo
                        </button>
                        <p className="text-xs opacity-40 font-bold uppercase tracking-widest mt-4">
                            7-Day Grace Period • Dissolve at Any Time
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
