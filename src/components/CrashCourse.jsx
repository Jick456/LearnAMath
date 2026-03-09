import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { FormatMathText } from './QuestionInterfaceNew';
import ConceptVisualizer from './ConceptVisualizer';

export default function CrashCourse({ topic, onSkip, onContinue }) {
    if (!topic) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex justify-center"
            >
                <Card className="flex flex-col items-center text-left max-w-[650px] w-full mx-auto" style={{ padding: 'var(--space-8)', background: 'rgba(17, 24, 39, 0.85)', boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
                    <div className="flex w-full justify-between items-center mb-6">
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', margin: 0, filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }}>{topic.title}</h2>
                        <div style={{
                            fontSize: '4rem',
                            animation: 'float 4s ease-in-out infinite',
                            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4))'
                        }}>
                            {topic.emoji}
                        </div>
                    </div>

                    <div style={{ width: '100%', borderBottom: '1px solid var(--surface-border)', marginBottom: 'var(--space-6)' }} />

                    <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)', color: 'var(--primary-hover)', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '1.8rem' }}>🧠</span> Visual Concept
                    </h3>

                    <ConceptVisualizer topicId={topic.id} emoji={topic.emoji} />

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: 'var(--space-6)',
                        borderRadius: 'var(--radius-lg)',
                        borderLeft: "4px solid " + topic.color,
                        marginBottom: 'var(--space-8)',
                        fontSize: '1.15rem',
                        lineHeight: 1.8,
                        width: '100%',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                    }}>
                        {/* Ensures the Crash Course content is rendered correctly through the fixed parser */}
                        <FormatMathText text={topic.crashCourse} />
                    </div>

                    <div style={{ width: '100%', padding: 'var(--space-4)', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-6)', textAlign: 'center', fontSize: '1.1rem' }}>
                        ⚠️ <strong>Note:</strong> Modules are extended. You will go through a guided <span style={{ color: 'var(--primary-hover)' }}>Learning Phase</span> followed by a strict <span style={{ color: 'var(--accent-error)' }}>Testing Phase</span>!
                    </div>

                    <div className="flex gap-4 w-full justify-center mt-4">
                        <Button variant="secondary" size="lg" onClick={onSkip} style={{ width: '180px' }}>Skip Intro</Button>
                        <Button variant="primary" size="lg" onClick={onContinue} style={{ width: '250px', backgroundColor: topic.color, boxShadow: "0 0 20px " + topic.color + "66" }}>Start Learning</Button>
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
