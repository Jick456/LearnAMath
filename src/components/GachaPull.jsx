import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function GachaPull({ onClaim, unlockedCharIds }) {
    const [character, setCharacter] = useState(null);
    const [phase, setPhase] = useState('shooting-star'); // 'shooting-star', 'burst', 'reveal'

    useEffect(() => {
        import('../data/characters.js').then(({ getRandomCharacter }) => {
            const char = getRandomCharacter();
            setCharacter(char);

            // Timing sequence
            setTimeout(() => setPhase('burst'), 1800);
            setTimeout(() => setPhase('reveal'), 2800);
        });
    }, []);

    const getRarityGlow = (rarity) => {
        switch (rarity) {
            case 'Legendary': return '0 0 50px rgba(236, 72, 153, 0.8), 0 0 100px rgba(236, 72, 153, 0.4)';
            case 'Epic': return '0 0 40px rgba(16, 185, 129, 0.7)';
            case 'Rare': return '0 0 30px rgba(234, 179, 8, 0.6)';
            default: return '0 0 20px rgba(249, 115, 22, 0.4)';
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(5, 8, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            zIndex: 3000, color: 'white', overflow: 'hidden'
        }}>
            <AnimatePresence>
                {/* Phase 1: Shooting Star */}
                {phase === 'shooting-star' && (
                    <motion.div
                        initial={{ x: '-150vw', y: '-100vh', scale: 0 }}
                        animate={{ x: '0vw', y: '0vh', scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ position: 'absolute' }}
                    >
                        <div style={{
                            width: '4px', height: '150px',
                            background: 'linear-gradient(to bottom, transparent, white)',
                            transform: 'rotate(-45deg)',
                            filter: 'drop-shadow(0 0 20px white)',
                            borderRadius: '50%'
                        }} />
                        <motion.h2
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            style={{ position: 'absolute', top: '100px', left: '-50px', whiteSpace: 'nowrap', fontSize: '2rem' }}
                            className="glow-text"
                        >
                            Summoning Axiom...
                        </motion.h2>
                    </motion.div>
                )}

                {/* Phase 2: Burst */}
                {phase === 'burst' && character && (
                    <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 30, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            width: '20px', height: '20px', borderRadius: '50%',
                            boxShadow: "0 0 100px 50px " + character.color,
                            backgroundColor: character.color
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Background Ambient Glow during reveal */}
            {phase === 'reveal' && character && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                    style={{
                        position: 'absolute', width: '800px', height: '800px', borderRadius: '50%',
                        background: "radial-gradient(circle, " + character.color + "33 0%, transparent 70%)",
                        filter: 'blur(80px)', zIndex: -1
                    }}
                />
            )}

            {/* Phase 3: Reveal */}
            {phase === 'reveal' && character && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ textAlign: 'center', position: 'relative' }}
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                        style={{
                            display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '20px',
                            backgroundColor: character.color + "22", border: "1px solid " + character.color,
                            color: character.color, fontWeight: 'bold', letterSpacing: '3px',
                            fontSize: '1rem', marginBottom: '1rem', textTransform: 'uppercase',
                            boxShadow: "0 0 15px " + character.color + "44"
                        }}
                    >
                        {character.rarity}
                    </motion.div>

                    <h1 style={{ fontSize: '4.5rem', marginBottom: '0', textShadow: getRarityGlow(character.rarity) }}>
                        {character.name}
                    </h1>

                    <motion.div
                        animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ width: '300px', height: '300px', margin: '2rem auto', filter: "drop-shadow(0 0 40px " + character.color + "88)" }}
                    >
                        {character.image ? (
                            <img src={character.image} alt={character.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                            <div style={{ fontSize: '12rem' }}>{character.emoji}</div>
                        )}
                    </motion.div>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem auto' }}>
                        {unlockedCharIds.includes(character.id)
                            ? `The elemental energy resonates... (+50 XP conversion)`
                            : `A new Axiom Summon joins your journey!`}
                    </p>

                    <Button
                        variant="primary" size="lg"
                        onClick={() => onClaim(character)}
                        style={{
                            backgroundColor: character.color, fontSize: '1.4rem', padding: '1rem 4rem',
                            border: 'none', boxShadow: "0 0 40px " + character.color + "66"
                        }}
                    >
                        Bind Summon
                    </Button>
                </motion.div>
            )
            }
        </div >
    );
}
