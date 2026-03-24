import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

export default function TopicSelector({ topics = [], activeLevel, onLevelChange, onSelect, weaknessCount, userStream }) {
    if (!Array.isArray(topics)) {
        console.error("Topics passed to TopicSelector is not an array:", topics);
        return <div className="p-8 text-center text-muted-foreground">The path of mastery is currently obscured...</div>;
    }

    const filteredTopics = topics.filter(t => {
        if (!t || !t.level) return false;
        let matchesLevel = false;
        if (activeLevel === 'Sec 3' || activeLevel === 'Sec 4') {
            matchesLevel = t.level.includes(activeLevel) || (t.level.includes('Sec 3') && t.level.includes('Sec 4')) || t.level.includes('Sec 3/4');
        } else {
            matchesLevel = t.level.includes(activeLevel);
        }
        const matchesStream = !userStream || t.level === 'Add Math' || t.level.includes(userStream);
        return matchesLevel && matchesStream;
    });

    return (
        <div className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto relative pb-12 px-4 text-center">
            {/* Background Decorations */}
            <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500 blur-[100px] opacity-10 pointer-events-none" />
            
            <div className="text-center relative mb-6">
              <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glow-text text-5xl md:text-7xl font-black uppercase tracking-[4px] mb-2"
              >
                  Path of Mastery
              </motion.h2>
              <p className="text-xl md:text-2xl opacity-60 font-medium">Ascend through the celestial branches of Mathematics</p>
            </div>

            {weaknessCount > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
                    <div className="glass-panel p-10 text-center border-2 border-dashed border-red-500/40 bg-red-500/[0.03]">
                        <h3 className="text-3xl font-black text-red-500 mb-4 flex items-center justify-center gap-4">
                            <span className="animate-pulse">🔥</span> Distortion Detected
                        </h3>
                        <p className="text-lg opacity-80 mb-8 max-w-[600px] mx-auto">
                            {weaknessCount} nodes of knowledge have been obscured by the Abyssal Fog. Restore their brilliance to continue your journey.
                        </p>
                        <button 
                            className="genshin-btn px-12 py-4" 
                            style={{ borderColor: '#ef4444', color: '#ef4444' }} 
                            onClick={() => onSelect('weaknesses')}
                        >
                            Purify Resonance
                        </button>
                    </div>
                </motion.div>
            )}

            <div className="flex justify-center gap-4 flex-wrap z-10 mb-8">
                {['Sec 1', 'Sec 2', 'Sec 3', 'Sec 4', 'Add Math'].map(level => (
                    <button
                        key={level}
                        className={`genshin-btn min-w-[140px] px-8 py-3 transition-all duration-300 ${activeLevel === level ? 'active-level' : 'opacity-60 hover:opacity-100'}`}
                        onClick={() => onLevelChange(level)}
                    >
                        {level}
                    </button>
                ))}
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            >
                {filteredTopics.map((topic, index) => (
                    <motion.div key={topic.id} variants={itemVariants} className="h-full">
                        <div 
                          className="glass-panel h-full flex flex-col items-center text-center p-10 hover:scale-[1.03] transition-all cursor-pointer group"
                          style={{ borderBottom: `4px solid ${topic.color || '#fbbf24'}` }}
                          onClick={() => onSelect(topic.id)}
                        >
                            <div className="relative mb-8">
                                <div 
                                  className="absolute inset-0 blur-3xl opacity-30 rounded-full group-hover:opacity-60 transition-opacity" 
                                  style={{ background: topic.color }} 
                                />
                                <div 
                                  style={{ fontSize: '6rem', animation: `float ${5 + (index % 3)}s ease-in-out infinite` }}
                                  className="relative drop-shadow-2xl filter saturate-[1.2]"
                                >
                                    {topic.emoji}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-wider">{topic.title}</h3>
                            <p className="opacity-70 leading-relaxed mb-auto italic font-medium">{topic.description}</p>
                            
                            <button
                                className="genshin-btn mt-10 w-full font-black tracking-[2px]"
                                style={{ borderColor: topic.color, color: topic.color }}
                            >
                                Enter Domain
                            </button>
                        </div>
                    </motion.div>
                ))}

                {filteredTopics.length === 0 && (
                    <div className="col-span-full glass-panel p-20 text-center">
                        <p className="text-2xl opacity-40 italic font-medium">This path is currently enshrouded in the mists of Celestia.</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
