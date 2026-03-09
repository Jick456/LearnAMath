import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Button from './Button';

export default function StoryAnimation({ topic, pet, onComplete }) {
    const [step, setStep] = useState(0);

    const dialogs = [
        { text: `Welcome to ${topic.location}, Arithmancer!`, character: pet.name },
        { text: topic.storyline, character: pet.name },
        { text: "Are you ready to cast your Proofs, defeat the Irrational, and restore this island?", character: pet.name }
    ];

    const handleNext = () => {
        if (step < dialogs.length - 1) {
            setStep(step + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: 'var(--space-8)' }}>
            <div style={{ position: 'relative', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                {/* The Pet */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ fontSize: '8rem', zIndex: 2, marginBottom: '-20px' }}
                >
                    {pet.emoji}
                </motion.div>

                {/* The Dialog Box */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="glass-panel"
                        style={{
                            width: '100%',
                            padding: 'var(--space-6)',
                            border: `2px solid ${topic.color}`,
                            boxShadow: `0 0 20px ${topic.color}44`,
                            position: 'relative',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{ position: 'absolute', top: '-15px', left: '20px', backgroundColor: topic.color, padding: '2px 12px', borderRadius: 'full', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {dialogs[step].character}
                        </div>

                        <p style={{ fontSize: '1.4rem', lineHeight: 1.5, minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {dialogs[step].text}
                        </p>

                        <Button
                            onClick={handleNext}
                            style={{ marginTop: 'var(--space-4)', backgroundColor: topic.color }}
                        >
                            {step === dialogs.length - 1 ? "Let's Begin!" : "Next"}
                        </Button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
