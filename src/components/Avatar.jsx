import React, { useState } from 'react';
import './components.css';
import ProgressBar from './ProgressBar';
import { getCharacterStage } from '../data/characters';

export default function Avatar({ level = 1, xp = 0, maxXp = 100, activeCharacter, unlockedCharacters = [], onSelectCharacter }) {
    const progress = (xp / maxXp) * 100;
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Derive current stage based on level
    const currentStage = getCharacterStage(activeCharacter, level);
    const petImage = currentStage?.image || activeCharacter?.image;
    const petName = currentStage?.name || activeCharacter?.name || 'Companion';

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Avatar Display */}
            <div
                className="avatar-container"
                onClick={() => unlockedCharacters.length > 1 && setIsOptionsOpen(!isOptionsOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    cursor: unlockedCharacters.length > 1 ? 'pointer' : 'default',
                    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)',
                    position: 'relative'
                }}
                title={unlockedCharacters.length > 1 ? `Click to change ${petName}!` : petName}
            >
                <div style={{
                    width: '120px',
                    height: '120px',
                    filter: `drop-shadow(0 0 20px ${activeCharacter?.color || 'rgba(139, 92, 246, 0.6)'})`,
                    animation: 'float 6s ease-in-out infinite'
                }}>
                    {petImage ? (
                        <img src={petImage} alt={petName} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                        <div style={{ fontSize: '5rem' }}>🦊</div>
                    )}
                </div>
                <div className="level-badge" style={{ backgroundColor: activeCharacter?.color }}>
                    {level}
                </div>

                {isHovered && (
                    <div style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--surface-card)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        whiteSpace: 'nowrap',
                        border: `1px solid ${activeCharacter?.color}`,
                        animation: 'fadeIn 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                        {petName}
                    </div>
                )}
            </div>

            {/* XP Bar */}
            <div style={{ width: '220px' }}>
                <ProgressBar
                    progress={progress}
                    label={`XP: ${xp}/${maxXp}`}
                    color={activeCharacter?.color}
                />
            </div>

            {/* Companion Selection Popover */}
            {isOptionsOpen && unlockedCharacters.length > 1 && (
                <div className="card glass-panel" style={{
                    position: 'absolute',
                    zIndex: 100,
                    marginTop: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    maxWidth: '300px',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3)',
                    animation: 'fadeIn 0.3s ease',
                    transform: 'translateY(190px)',
                    border: '1px solid var(--surface-border)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                }}>
                    {unlockedCharacters.map(char => (
                        <div
                            key={char.id}
                            onClick={() => {
                                onSelectCharacter(char);
                                setIsOptionsOpen(false);
                            }}
                            className="companion-option"
                            style={{
                                fontSize: '2.5rem',
                                cursor: 'pointer',
                                padding: 'var(--space-2)',
                                borderRadius: 'var(--radius-md)',
                                background: activeCharacter?.id === char.id ? 'var(--surface-hover)' : 'transparent',
                                border: activeCharacter?.id === char.id ? `2px solid ${char.color}` : '2px solid transparent',
                                transition: 'all 0.2s ease'
                            }}
                            title={getCharacterStage(char, level)?.name}
                        >
                            {/* Show the currently unlocked stage image */}
                            {getCharacterStage(char, level)?.image ? (
                                <img src={getCharacterStage(char, level).image} alt={char.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            ) : (
                                <div>{getCharacterStage(char, level)?.emoji}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
