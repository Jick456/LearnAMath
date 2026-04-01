import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserProgress } from '../context/UserProgressContext';
import { useNavigate, useLocation } from '../utils/router';
import AdBanner from './AdBanner';
import './Sidebar.css';

const Sidebar = () => {
    const { 
        activeLevel, setActiveLevel,
        difficulty, setDifficulty,
        unlockedCharacters, activeCharacter, setActiveCharacter,
        user, userStream, setUserStream
    } = useUserProgress();

    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('chapters'); // 'chapters', 'characters', 'difficulty'

    if (!user) return null;

    const chapters = ['Sec 1', 'Sec 2', 'Sec 3', 'Sec 4', 'Add Math'];
    const streams = ['G1', 'G2', 'G3'];
    const difficulties = [
        { id: 'easy', label: 'Light Brew', desc: 'Apprentice' },
        { id: 'medium', label: 'Balanced', desc: 'Journeyman' },
        { id: 'hard', label: 'Strong', desc: 'Grandmaster' }
    ];

    const handleLevelSelect = (level) => {
        setActiveLevel(level);
        if (location.pathname !== '/selector') {
            navigate('/selector');
        }
    };

    return (
        <aside className="tea-sidebar">
            <div className="tea-sidebar-header">
                <h1 className="tea-sidebar-title">Learn A Math</h1>
                <p className="tea-sidebar-subtitle">Mathematical Brew House</p>
            </div>

            <div className="tea-sidebar-tabs">
                <button 
                    className={`tea-tab-btn ${activeTab === 'chapters' ? 'active' : ''}`}
                    onClick={() => setActiveTab('chapters')}
                    title="Chapters"
                >
                    🍵
                </button>
                <button 
                    className={`tea-tab-btn ${activeTab === 'characters' ? 'active' : ''}`}
                    onClick={() => setActiveTab('characters')}
                    title="Tea Companions"
                >
                    🦊
                </button>
                <button 
                    className={`tea-tab-btn ${activeTab === 'difficulty' ? 'active' : ''}`}
                    onClick={() => setActiveTab('difficulty')}
                    title="Tea Strength"
                >
                    🌡️
                </button>
            </div>

            <div className="tea-sidebar-content">
                <AnimatePresence mode="wait">
                    {activeTab === 'chapters' && (
                        <motion.div 
                            key="chapters"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="tea-list"
                        >
                            <h3 className="tea-section-title mb-2">🎓 Select Course</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {streams.map(stream => (
                                    <div 
                                        key={stream}
                                        className={`tea-item ${userStream === stream ? 'active' : ''}`}
                                        style={{ padding: '0.5rem', justifyContent: 'center', fontSize: '0.85rem' }}
                                        onClick={() => setUserStream(stream)}
                                    >
                                        <span style={{ margin: 0 }}>{stream}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="tea-section-title">📜 Select Domain</h3>
                            {chapters.map((lvl) => (
                                <div 
                                    key={lvl}
                                    className={`tea-item ${activeLevel === lvl ? 'active' : ''}`}
                                    onClick={() => handleLevelSelect(lvl)}
                                >
                                    <span>{lvl}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'characters' && (
                        <motion.div 
                            key="characters"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="tea-list"
                        >
                            <h3 className="tea-section-title">🦊 Tea Companions</h3>
                            {unlockedCharacters.map((char) => (
                                <div 
                                    key={char.id}
                                    className={`tea-item ${activeCharacter.id === char.id ? 'active' : ''}`}
                                    onClick={() => setActiveCharacter(char)}
                                >
                                    <img src={char.image} alt={char.name} className="tea-char-icon" />
                                    <span>{char.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'difficulty' && (
                        <motion.div 
                            key="difficulty"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="tea-list"
                        >
                            <h3 className="tea-section-title">🌡️ Brew Strength</h3>
                            {difficulties.map((diff) => (
                                <div 
                                    key={diff.id}
                                    className={`tea-item ${difficulty === diff.id ? 'active' : ''}`}
                                    onClick={() => setDifficulty(diff.id)}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 700 }}>{diff.label}</span>
                                        <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>{diff.desc}</span>
                                    </div>
                                    <div className={`tea-difficulty-badge tea-diff-${diff.id}`} style={{ marginLeft: 'auto' }}>
                                        {diff.id}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Sidebar Ad Unit - Visible to users logic */}
                <div style={{ padding: '0 1rem', marginTop: '1rem' }}>
                    <AdBanner 
                        dataAdSlot="1234567890" 
                        dataAdFormat="vertical" 
                    />
                </div>
            </div>

            <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: '1px solid var(--sidebar-border)', fontSize: '0.75rem', color: 'var(--sidebar-text-muted)', textAlign: 'center' }}>
                Brewed with Logic & Matcha
            </div>
        </aside>
    );
};

export default Sidebar;
