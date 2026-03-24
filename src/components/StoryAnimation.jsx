import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Button from './Button';

export default function StoryAnimation({ topic, pet, onComplete }) {
    const [step, setStep] = useState(0);

    const petName = pet?.name || 'Companion';
    const petImage = pet?.image || null;

    const dialogs = topic.storySegments || [
        { text: `Welcome to ${topic.location || topic.title}, Scholar!`, character: petName },
        { text: topic.storyline || topic.description || '', character: petName },
        { text: "Are you ready to cast your Proofs, defeat the Irrational, and restore this island?", character: petName }
    ];

    const handleNext = () => {
        if (step < dialogs.length - 1) {
            setStep(step + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="w-full flex justify-center items-center pb-20" style={{ minHeight: '600px' }}>
            <div className="relative w-full max-w-[900px] flex flex-col items-center">
                
                {/* Floating Pet with Magical Glow */}
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ 
                      zIndex: 10, 
                      filter: `drop-shadow(0 0 35px ${topic.color}66)`,
                      marginBottom: '-40px' 
                    }}
                >
                    <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-[200px] md:w-[300px] h-auto object-contain"
                    />
                </motion.div>

                {/* Cinematic Dialogue Box */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="glass-panel w-full p-10 md:p-14 text-center relative overflow-visible"
                        style={{
                            border: `3px solid ${topic.color}`,
                            boxShadow: `0 0 50px ${topic.color}22`,
                            borderRadius: '32px'
                        }}
                    >
                        {/* Speaker Name Tag */}
                        <div 
                          className="absolute top-[-25px] left-10 py-2 px-8 font-black uppercase tracking-widest text-sm shadow-xl"
                          style={{ 
                            backgroundColor: topic.color || 'var(--geo-gold)', 
                            color: 'white', 
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.3)'
                          }}
                        >
                            {dialogs[step].character}
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 opacity-30" style={{ borderColor: topic.color }} />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 opacity-30" style={{ borderColor: topic.color }} />

                        <p className="font-medium mb-10" style={{ 
                          fontSize: 'clamp(1.4rem, 4vw, 2rem)', 
                          lineHeight: 1.6, 
                          color: 'var(--text-main)',
                          minHeight: '120px',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}>
                            {dialogs[step].text}
                        </p>

                        <div className="flex justify-center">
                            <button
                                className="genshin-btn px-16 py-4 text-xl"
                                onClick={handleNext}
                                style={{ borderColor: topic.color, color: topic.color }}
                            >
                                {step === dialogs.length - 1 ? "Initiate Mastery Trial" : "Continue Resonance"}
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Ambient Particles Layer (using pseudo-element style if needed, but handled by index.css) */}
            </div>
        </div>
    );
}
