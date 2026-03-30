import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import FormatMathText from './FormatMathText';
import ConceptVisualizer from './ConceptVisualizer';

export default function CrashCourse({ topic, onSkip, onContinue }) {
    if (!topic) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-full flex justify-center pb-20"
            >
                <div className="glass-panel p-10 md:p-14 max-w-[800px] w-full text-center relative overflow-visible" style={{ border: `3px solid ${topic.color || 'var(--geo-gold)'}` }}>
                    {/* Celestial Corner Motifs */}
                    <div className="absolute top-[-15px] left-[-15px] w-12 h-12 transform rotate-45 flex items-center justify-center bg-surface border-2 border-geo-gold rounded-lg shadow-xl" style={{ borderColor: topic.color }}>
                        <span style={{ transform: 'rotate(-45deg)', fontSize: '1.5rem' }}>✨</span>
                    </div>
                    <div className="absolute bottom-[-15px] right-[-15px] w-12 h-12 transform rotate-45 flex items-center justify-center bg-surface border-2 border-geo-gold rounded-lg shadow-xl" style={{ borderColor: topic.color }}>
                        <span style={{ transform: 'rotate(-45deg)', fontSize: '1.5rem' }}>📖</span>
                    </div>

                    <div className="mb-10 flex flex-col items-center">
                        <div style={{
                            fontSize: '6rem',
                            marginBottom: 'var(--space-4)',
                            filter: `drop-shadow(0 0 25px ${topic.color}88)`,
                            animation: 'float 4s ease-in-out infinite'
                        }}>
                            {topic.emoji}
                        </div>
                        <h2 className="glow-text mt-4" style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-main)' }}>{topic.title}</h2>
                        <div className="w-24 h-1 mt-2 rounded-full" style={{ background: topic.color }} />
                    </div>

                    <div className="mb-10 text-left">
                        <h3 className="flex items-center gap-3 mb-6" style={{ fontSize: '1.6rem', fontWeight: 800, color: topic.color }}>
                            <span style={{ fontSize: '2rem' }}>👁️</span> Essential Visualization
                        </h3>
                        <ConceptVisualizer topicId={topic.id} emoji={topic.emoji} />
                    </div>

                    <div className="p-8 md:p-10 mb-12 text-left rounded-3xl bg-[var(--surface-sub)] border border-[var(--surface-border)]" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)' }}>
                        <h4 className="mb-6 opacity-60 uppercase tracking-widest text-xs font-black">Celestial Principles</h4>
                        <div style={{ fontSize: '1.3rem', lineHeight: 1.8, color: 'var(--text-main)', fontWeight: 500 }}>
                            <FormatMathText text={topic.crashCourse} />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                        <button 
                            className="genshin-btn px-8 py-3 text-lg" 
                            style={{ opacity: 0.7, borderColor: 'var(--text-muted)', color: 'var(--text-muted)' }} 
                            onClick={onSkip}
                        >
                            Skip Intro
                        </button>
                        <button 
                            className="genshin-btn px-16 py-4 text-xl" 
                            style={{ borderColor: topic.color, color: topic.color }} 
                            onClick={onContinue}
                        >
                            Accept Trial
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
