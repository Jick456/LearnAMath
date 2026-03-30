import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './components.css';
import ProgressBar from './ProgressBar';
import { getCharacterStage } from '../data/characters';

export default function Avatar({ level = 1, xp = 0, maxXp = 100, activeCharacter, unlockedCharacters = [], onSelectCharacter }) {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Derive current stage based on level
    const currentStage = getCharacterStage(activeCharacter, level);
    const petImage = currentStage?.image || activeCharacter?.image;
    const petName = currentStage?.name || activeCharacter?.name || 'Companion';

    return (
        <div className="flex flex-col items-center gap-6 relative">
            {/* Avatar Display with Elemental Glow */}
            <div
                className="relative cursor-pointer transition-all duration-500 ease-out"
                onClick={() => unlockedCharacters.length > 1 && setIsOptionsOpen(!isOptionsOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
            >
                {/* Aura Glow */}
                <div 
                  className="absolute inset-0 blur-[60px] opacity-30 rounded-full animate-pulse" 
                  style={{ background: activeCharacter?.color || 'var(--geo-gold)' }} 
                />

                <div className="relative" style={{
                    width: 'clamp(160px, 40vw, 240px)'
                }}>
                    <img 
                      src={petImage} 
                      alt={petName} 
                      className="w-full h-auto object-contain drop-shadow-2xl" 
                    />
                </div>

                {/* Level Badge - Paimon Style */}
                <div 
                  className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl border-4 border-white/20 shadow-xl"
                  style={{ 
                    background: activeCharacter?.color || 'var(--geo-gold)',
                    color: 'rgba(0,0,0,0.8)'
                  }}
                >
                    {level}
                </div>

                {/* Permanent Pet Name Display */}
                <div 
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 py-1 px-4 backdrop-blur-sm rounded-full font-bold whitespace-nowrap shadow-lg z-20 text-sm"
                    style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)', color: 'var(--text-main)' }}
                >
                    {petName}
                </div>
            </div>

            {/* Companion Selection Grid */}
            <AnimatePresence>
                {isOptionsOpen && unlockedCharacters.length > 1 && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="glass-panel absolute top-[110%] p-6 z-[500] w-[350px] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
                        style={{ border: '2px solid var(--surface-border)' }}
                    >
                        <h4 className="text-[10px] uppercase tracking-[4px] font-black opacity-40 mb-4 text-center">Bonded Companions</h4>
                        <div className="grid grid-cols-4 gap-4">
                            {unlockedCharacters.map(char => {
                                const charStage = getCharacterStage(char, level);
                                const isSelected = activeCharacter?.id === char.id;
                                return (
                                    <div
                                        key={char.id}
                                        onClick={() => {
                                            onSelectCharacter(char);
                                            setIsOptionsOpen(false);
                                        }}
                                        className={`cursor-pointer p-2 rounded-xl transition-all`}
                                        style={{ ...(isSelected ? { boxShadow: `0 0 0 3px ${char.color}`, borderRadius: '12px' } : {}), ':hover': { background: 'var(--surface-sub)' } }}
                                    >
                                        <img 
                                          src={charStage?.image} 
                                          alt={char.name} 
                                          className={`w-full h-12 object-contain ${isSelected ? 'scale-110' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`} 
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
