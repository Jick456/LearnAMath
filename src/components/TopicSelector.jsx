import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';

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
        <div className="flex flex-col gap-6 w-full max-w-[900px] mx-auto relative">
            {/* Background Constellation Decoration */}
            <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)', filter: 'blur(50px)', opacity: 0.4, zIndex: -1, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 60%)', filter: 'blur(60px)', opacity: 0.3, zIndex: -1, pointerEvents: 'none' }} />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 800, letterSpacing: '1px' }}
                className="glow-text"
            >
                Path of Mastery
            </motion.h2>

            {weaknessCount > 0 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <Card style={{
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
                        borderColor: 'var(--accent-warning)',
                        textAlign: 'center',
                        animation: 'pulse-glow 3s infinite',
                        padding: 'var(--space-6)',
                        boxShadow: '0 0 30px rgba(245, 158, 11, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-warning)', marginBottom: 'var(--space-2)' }}>
                            ⚠️ Weakness Review
                        </h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-4)', fontSize: '1.1rem' }}>
                            You have {weaknessCount} node{weaknessCount > 1 ? 's' : ''} out of alignment. Review to restore mastery!
                        </p>
                        <Button variant="primary" onClick={() => onSelect('weaknesses')} style={{ backgroundColor: 'var(--accent-error)', padding: '12px 30px', fontSize: '1.2rem' }}>
                            Restore Alignment
                        </Button>
                    </Card>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-3 flex-wrap"
                style={{ marginBottom: 'var(--space-4)' }}
            >
                {['Sec 1', 'Sec 2', 'Sec 3', 'Sec 4', 'Add Math'].map(level => (
                    <Button
                        key={level}
                        variant={activeLevel === level ? "primary" : "secondary"}
                        onClick={() => onLevelChange(level)}
                        style={{ width: '130px', fontSize: '1.1rem', padding: '10px' }}
                    >
                        {level}
                    </Button>
                ))}
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', position: 'relative' }}
            >
                {filteredTopics.map((topic, index) => (
                    <motion.div key={topic.id} variants={itemVariants} style={{ position: 'relative', zIndex: 1 }}>
                        <Card
                            className="flex flex-col items-center text-center glass-panel"
                            style={{
                                padding: 'clamp(var(--space-4), 5vw, var(--space-8))',
                                borderTop: "4px solid " + topic.color
                            }}
                        >
                            <div style={{
                                fontSize: 'clamp(3rem, 15vw, 4.5rem)',
                                marginBottom: 'var(--space-4)',
                                filter: "drop-shadow(0 0 20px " + topic.color + "88)",
                                animation: index % 2 === 0 ? 'float 4s ease-in-out infinite' : 'float 5s ease-in-out infinite reverse'
                            }}>
                                {topic.emoji}
                            </div>
                            <h3 style={{ fontSize: 'clamp(1.3rem, 5vw, 1.6rem)', color: topic.color, marginBottom: 'var(--space-2)' }}>{topic.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>{topic.description}</p>
                            <Button
                                onClick={() => onSelect(topic.id)}
                                style={{ marginTop: 'var(--space-6)', width: '100%', backgroundColor: topic.color, color: '#fff', boxShadow: "0 0 15px " + topic.color + "66" }}
                            >
                                Enter Module
                            </Button>
                        </Card>
                    </motion.div >
                ))
                }

                {
                    filteredTopics.length === 0 && (
                        <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: 'var(--space-8)' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>This path is currently enshrouded in mountain mist.</p>
                        </div>
                    )
                }
            </motion.div >
        </div >
    );
}
