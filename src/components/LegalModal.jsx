import React from 'react';
import { motion } from 'framer-motion';
import { FormatMathText } from './FormatMathText';

const LegalModal = ({ show, onClose, type }) => {
    if (!show) return null;

    const content = type === 'terms' ? {
        title: 'Decree of Axiom',
        subtitle: 'Terms of Service',
        text: `
# Decree of Axiom (Terms)

*Sanctified on: March 17, 2026*

## 1. Acceptance of Resonance
By accessing the Realm of Axiom ("the Service"), you agree to be bound by these Sacred Decrees. If you do not resonate with these terms, you may not enter the Domain.

## 2. Divine Purpose
MathMastery SG is a celestial learning experience designed to guide Scholars through the Singapore MOE syllabus.

## 3. Guardian Accounts
- Scholars are responsible for their own Spirit Keys (credentials).
- Parental/Guardian ritual consent is required for those who have seen fewer than 13 summers.

## 4. Celestial Property
All scrolls, sprites, and sigils are the property of the Axiom Architects.

## 5. Abyssal Conduct
Do not use automated shades (bots) to farm resonance (XP).
    `
    } : {
        title: 'Veil of Shadows',
        subtitle: 'Privacy Policy',
        text: `
# Veil of Shadows (Privacy)

*Sanctified on: March 17, 2026*

## 1. Essences We Harvest
We gather only what is necessary to sustain your journey:
- **Resonance ID:** Name and email (via Google Login).
- **Mastery Trace:** XP progress and domain completion.

## 2. Using Your Essence
To personalize your Path of Mastery and improve the accuracy of our Prophecies.

## 3. Protection
Your essence is guarded by the highest celestial enchantments.

## 4. Rights (PDPA)
You may request to dissolve your resonance at any time ("The Right to Fade").
    `
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[8000] p-6">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="glass-panel max-w-[700px] w-full max-h-[85vh] overflow-hidden flex flex-col relative z-10"
                style={{ border: '2px solid var(--geo-gold)' }}
            >
                {/* Scroll Header */}
                <div 
                  className="p-10 text-center relative border-b border-white/10"
                  style={{ background: 'linear-gradient(to bottom, rgba(251, 191, 36, 0.1), transparent)' }}
                >
                    <h2 className="glow-text text-4xl font-black uppercase tracking-[6px] mb-2">{content.title}</h2>
                    <p className="opacity-50 text-sm font-bold uppercase tracking-widest">{content.subtitle}</p>
                </div>

                {/* Scroll Body */}
                <div className="p-10 overflow-y-auto custom-scrollbar flex-grow text-left">
                    <div className="prose prose-invert max-w-none opacity-80 leading-relaxed font-medium">
                        <FormatMathText text={content.text} />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-white/10 flex justify-center">
                    <button className="genshin-btn px-20" onClick={onClose}>
                        Resonate & Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default LegalModal;
