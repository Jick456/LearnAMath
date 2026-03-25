import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { useUserProgress } from '../context/UserProgressContext';

export default function GachaPull({ onClaim, unlockedCharIds, score = 0 }) {
    const { gachaPity, setGachaPity } = useUserProgress();
    const [character, setCharacter] = useState(null);
    const [phase, setPhase] = useState('shooting-star'); // 'shooting-star', 'burst', 'reveal'

    useEffect(() => {
        import('../data/characters.js').then(({ getRandomCharacter, gachaCharacters }) => {
            let char = getRandomCharacter(score);

            // Pity System: 3 duplicates guarantee a new character
            if (gachaPity >= 3 && unlockedCharIds.length < gachaCharacters.length) {
                const unowned = gachaCharacters.filter(c => !unlockedCharIds.includes(c.id));
                if (unowned.length > 0) {
                    char = unowned[Math.floor(Math.random() * unowned.length)];
                }
            }

            if (unlockedCharIds.includes(char.id)) {
                setGachaPity(prev => prev + 1);
            } else {
                setGachaPity(0);
            }

            setCharacter(char);

            // Timing sequence
            const timers = [
                setTimeout(() => setPhase('burst'), 2200),
                setTimeout(() => setPhase('reveal'), 3200)
            ];
            return () => timers.forEach(t => clearTimeout(t));
        });
    }, []);

    const handleSkip = () => {
        setPhase('reveal');
    };

    const getRarityGlow = (rarity) => {
        switch (rarity) {
            case 'Legendary': return '0 0 60px #ffb6c1, 0 0 120px rgba(255, 182, 193, 0.4)';
            case 'Epic': return '0 0 50px #fff2ae, 0 0 100px rgba(255, 242, 174, 0.4)';
            case 'Rare': return '0 0 40px #b3e2cd';
            default: return '0 0 30px rgba(255,255,255,0.3)';
        }
    };

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-[5000] overflow-hidden bg-[#05080f]">
            {/* Background Ambient Stars */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #1a1f35 0%, #05080f 100%)' }} />
            
            <AnimatePresence>
                {/* Phase 1: Shooting Star */}
                {phase === 'shooting-star' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ x: '-150vw', y: '-50vh', rotate: -20, scale: 0.5 }}
                            animate={{ x: '150vw', y: '50vh', rotate: -20, scale: 1.5 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            className="absolute"
                        >
                            <div className="w-[800px] h-[4px] bg-gradient-to-r from-transparent via-white to-white blur-sm" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_50px_white]" />
                        </motion.div>

                        <div className="absolute bottom-20 flex flex-col items-center gap-4">
                            <h2 className="glow-text text-3xl font-black uppercase tracking-[10px] animate-pulse">Summoning Axiom</h2>
                            <button 
                                onClick={handleSkip}
                                className="px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all opacity-50"
                            >
                                Skip Summon
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Phase 2: Burst */}
                {phase === 'burst' && character && (
                    <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 60, opacity: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="absolute w-10 h-10 rounded-full"
                        style={{ backgroundColor: character.color, boxShadow: `0 0 100px 50px ${character.color}` }}
                    />
                )}
            </AnimatePresence>

            {/* Phase 3: Reveal */}
            {phase === 'reveal' && character && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-full h-full flex flex-col items-center justify-center"
                >
                    {/* Background Radial Glow */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0.3 }}
                        transition={{ duration: 2 }}
                        className="absolute w-[1000px] h-[1000px] rounded-full blur-[120px]"
                        style={{ background: `radial-gradient(circle, ${character.color} 0%, transparent 70%)` }}
                    />

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="z-10 text-center flex flex-col items-center"
                    >
                        <div 
                          className="px-8 py-2 mb-6 font-black uppercase tracking-[6px] text-sm shadow-2xl"
                          style={{ background: character.color, color: 'black', borderRadius: '4px' }}
                        >
                            {character.rarity}
                        </div>

                        <h1 className="font-black mb-8" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', textShadow: getRarityGlow(character.rarity) }}>
                            {character.name}
                        </h1>

                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative mb-12"
                        >
                            <div className="absolute inset-0 blur-[60px] opacity-40 rounded-full" style={{ backgroundColor: character.color }} />
                            <img 
                              src={character.image} 
                              alt={character.name} 
                              className="w-[300px] md:w-[450px] h-auto object-contain relative z-10" 
                            />
                        </motion.div>

                        <p className="text-xl max-w-[500px] mb-12 opacity-80 font-medium">
                            {unlockedCharIds.includes(character.id)
                                ? `The celestial resonance deepens... (+50 XP conversion)`
                                : `The mists of Axiom part to welcome a new companion.`}
                        </p>

                        <button
                            className="genshin-btn px-20 py-5 text-2xl"
                            onClick={() => onClaim(character)}
                            style={{ 
                              backgroundColor: character.color, 
                              color: 'black',
                              borderColor: 'transparent',
                              boxShadow: `0 0 50px ${character.color}66`
                            }}
                        >
                            Establish Link
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
