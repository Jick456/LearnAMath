import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import analytics from '../utils/analytics';
import DOMPurify from 'dompurify';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import MathDiagram from './MathDiagrams';

// Robust parser to handle inline ($ $) and block ($$ $$) math, as well as escaped variants and diagrams
export const FormatMathText = ({ text }) => {
    if (!text) return null;

    // Split the text by Diagram tags first to keep them at the top level
    const diagramParts = text.split(/\[DIAGRAM:\s*(.*?)\]/g);

    return (
        <div className="math-text-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {diagramParts.map((diagramPart, diagramIdx) => {
                if (diagramPart === undefined) return null;

                // Odd indices are the captured diagram types
                if (diagramIdx % 2 !== 0) {
                    return <MathDiagram key={`diagram-${diagramIdx}`} type={diagramPart.trim()} />;
                }

                // Even indices are regular text blocks containing math
                const blocks = diagramPart.split('\n');

                return blocks.map((block, idx) => {
                    if (!block.trim()) return null;

                    // Split by Block Math first `$$ ... $$` or `\\[ ... \\]` (escaped and unescaped)
                    const blockParts = block.split(/(?:\$\$(.*?)\$\$|\\\[(.*?)\\\]|\\\\\[(.*?)\\\\\])/g);

                    return (
                        <p key={idx} style={{ margin: 0, lineHeight: 1.6 }}>
                            {blockParts.map((part, i) => {
                                if (part === undefined) return null;

                                // Even indices are text (which could contain inline math), odd indices are block math
                                if (i % 4 === 0) {
                                    // Now split this text part by Inline Math `$ ... $` or `\( ... \)`
                                    const inlineParts = part.split(/(?:\$(.*?)\$|\\\((.*?)\\\)|\\\\(\(.*?)\\\\\))/g);

                                    return inlineParts.map((inlinePart, j) => {
                                        if (inlinePart === undefined) return null;

                                        if (j % 4 === 0) { // Normal text
                                            return (
                                                <span
                                                    key={`inline-text-${i}-${j}`}
                                                    className="text-span"
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(inlinePart.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
                                                    }}
                                                />
                                            );
                                        } else { // Inline Math
                                            try {
                                                const mathStr = inlinePart.replace(/\\\\\\\\/g, '\\\\').replace(/\\\\/g, '\\');
                                                return (
                                                    <span key={`inline-math-${i}-${j}`} className="math-span">
                                                        <InlineMath math={mathStr} />
                                                    </span>
                                                );
                                            } catch (e) {
                                                return <span key={`inline-math-${i}-${j}`} style={{ color: 'var(--accent-error)' }}>[Math Error: {inlinePart}]</span>;
                                            }
                                        }
                                    });
                                } else if (part.trim() !== '') {
                                    // Block Math
                                    try {
                                        const mathStr = part.replace(/\\\\\\\\/g, '\\\\').replace(/\\\\/g, '\\');
                                        return (
                                            <div key={`block-math-${i}`} className="math-block">
                                                <BlockMath math={mathStr} />
                                            </div>
                                        );
                                    } catch (e) {
                                        return <div key={`block-math-${i}`} style={{ color: 'var(--accent-error)', textAlign: 'center' }}>[Math Error: {part}]</div>;
                                    }
                                }
                                return null;
                            })}
                        </p>
                    );
                });
            })}
        </div>
    );
};

export default function QuestionInterface({ questionsObj, onComplete, onGainXp, onMissedQuestion, isWeaknessMode, activeCharacter }) {
    const [difficulty, setDifficulty] = useState(null);
    const [phase, setPhase] = useState(isWeaknessMode ? 'testing' : 'difficulty-select');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [testAnswers, setTestAnswers] = useState([]);
    const [startTime] = useState(Date.now());

    // Safely extract the questions list depending on the phase
    const getQuestionsList = () => {
        if (phase === 'review' || phase === 'difficulty-select') return [];
        const rawList = isWeaknessMode ? questionsObj : (questionsObj ? (questionsObj[phase] || []) : []);

        if (difficulty && !isWeaknessMode) {
            const filtered = rawList.filter(q => q.difficulty === difficulty);
            if (filtered.length > 0) return filtered;
        }

        const weight = { 'easy': 1, 'medium': 2, 'hard': 3 };
        return [...rawList].sort((a, b) => (weight[a.difficulty] || 2) - (weight[b.difficulty] || 2));
    };

    const questionsList = getQuestionsList();

    const handleStartDifficulty = (diff) => {
        setDifficulty(diff);
        setPhase('learning');
        setCurrentIndex(0);
    };

    if (phase === 'difficulty-select' && !isWeaknessMode) {
        return (
            <div className="flex flex-col items-center gap-12 w-full max-w-[1000px] mx-auto pb-12">
                <div className="text-center">
                  <h2 className="glow-text" style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase' }}>Select Your Domain</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Choose the severity of the mathematical dissonance.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {[
                        { id: 'easy', label: 'Apprentice', color: 'var(--emerald-green)', icon: '🌱', desc: 'Fundamental concepts & simple proofs.' },
                        { id: 'medium', label: 'Journeyman', color: 'var(--geo-gold)', icon: '⛰️', desc: 'Complex logic & multi-step variables.' },
                        { id: 'hard', label: 'Grandmaster', color: 'var(--pyro-red)', icon: '🔥', desc: 'Recursive challenges & abstract axioms.' }
                    ].map(tier => (
                        <motion.div
                            key={tier.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-panel p-8 text-center cursor-pointer transition-all flex flex-col items-center"
                            style={{ 
                              borderTop: `8px solid ${tier.color}`,
                              boxShadow: `0 0 30px ${tier.color}22`
                            }}
                            onClick={() => handleStartDifficulty(tier.id)}
                        >
                            <span style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>{tier.icon}</span>
                            <h3 style={{ color: tier.color, fontSize: '1.8rem', fontWeight: 800, marginBottom: 'var(--space-2)' }}>{tier.label}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>{tier.desc}</p>
                            <button className="genshin-btn w-full" style={{ borderColor: tier.color, color: tier.color }}>
                                Select Tier
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    if (!questionsList || questionsList.length === 0) {
        if (phase === 'learning' && !isWeaknessMode) {
            if (questionsObj && questionsObj['testing'] && questionsObj['testing'].length > 0) {
                setPhase('testing');
                setCurrentIndex(0);
                return null;
            }
        }
        if (phase !== 'review') {
            return (
                <div className="glass-panel p-12 text-center max-w-[600px] mx-auto">
                    <h3 className="glow-text" style={{ fontSize: '2.5rem' }}>Domain Conquered!</h3>
                    <p className="mt-4 text-muted">The mathematical flows has been restored to this region.</p>
                    <button className="genshin-btn mt-8" onClick={() => onComplete(null)}>Return to World Map</button>
                </div>
            );
        }
    }

    const question = questionsList[currentIndex];
    if (!question) return null;

    const isCorrect = selectedOption === question.correctAnswer;

    const handleSelectOption = (index) => {
        if (hasAnswered) return;
        setSelectedOption(index);

        if (phase === 'testing') {
            const isAnsCorrect = index === question.correctAnswer;
            analytics.trackQuestionResult(question.topicId || 'unknown', question.id, question.difficulty, isAnsCorrect);
            setTestAnswers(prev => [...prev, { question, selectedOption: index, isCorrect: isAnsCorrect }]);
            if (isAnsCorrect) onGainXp(question.xpReward * 2);
            else if (onMissedQuestion) onMissedQuestion(question);
            setTimeout(() => { handleNext(); }, 600);
        } else {
            const isAnsCorrect = index === question.correctAnswer;
            analytics.trackQuestionResult(question.topicId || 'unknown', question.id, question.difficulty, isAnsCorrect);
            setHasAnswered(true);
            if (isAnsCorrect) onGainXp(question.xpReward);
            else if (onMissedQuestion) onMissedQuestion(question);
        }
    };

    const handleFinalComplete = (weaknessId = null) => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        const correctCount = testAnswers.filter(a => a.isCorrect).length;
        const totalCount = testAnswers.length || 1;
        analytics.trackTopicCompletion(question.topicId || 'unknown', timeSpent, (correctCount / totalCount) * 100);
        onComplete(weaknessId);
    };

    const handleNext = () => {
        if (currentIndex < questionsList.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setHasAnswered(false);
        } else {
            if (phase === 'learning' && !isWeaknessMode) {
                setPhase('testing');
                setCurrentIndex(0);
                setSelectedOption(null);
                setHasAnswered(false);
            } else if (phase === 'testing') {
                setPhase('review');
            } else {
                handleFinalComplete(isWeaknessMode ? (isCorrect ? question.id : null) : null);
            }
        }
    };

    if (phase === 'review') {
        const correctCount = testAnswers.filter(a => a.isCorrect).length;
        return (
            <div className="flex flex-col items-center gap-10 w-full max-w-[900px] mx-auto pb-12">
                <div className="text-center">
                  <h2 className="glow-text" style={{ fontSize: '3rem' }}>Domain Evaluation</h2>
                  <p style={{ fontSize: '1.4rem', color: 'var(--geo-gold)', fontWeight: 700 }}>Mastery Ratio: {correctCount} / {testAnswers.length}</p>
                </div>

                <div className="flex flex-col gap-8 w-full">
                    {testAnswers.map((item, idx) => (
                        <div key={idx} className="glass-panel p-8" style={{ borderLeft: `8px solid ${item.isCorrect ? 'var(--emerald-green)' : 'var(--pyro-red)'}` }}>
                            <div className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50" style={{ color: item.isCorrect ? 'var(--emerald-green)' : 'var(--pyro-red)' }}>
                              Node {idx + 1} - {item.isCorrect ? 'Resonance Achieved' : 'Dissonance Detected'}
                            </div>
                            <div style={{ marginBottom: 'var(--space-6)', fontSize: '1.4rem', fontWeight: 600 }}>
                                <FormatMathText text={item.question.text} />
                            </div>

                            <div className="p-4 mb-6 rounded-xl bg-white/5 border border-white/10">
                                <div style={{ color: item.isCorrect ? 'var(--emerald-green)' : 'var(--pyro-red)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                                    Arithmancer Input: <FormatMathText text={item.question.options[item.selectedOption]} />
                                </div>
                                {!item.isCorrect && (
                                    <div style={{ color: 'var(--geo-gold)' }}>
                                        Correct Formula: <FormatMathText text={item.question.options[item.question.correctAnswer]} />
                                    </div>
                                )}
                            </div>

                            <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                                <h4 style={{ color: 'var(--celestial-blue)', fontSize: '1.1rem', marginBottom: 'var(--space-2)', fontWeight: 800, textTransform: 'uppercase' }}>Celestial Insight:</h4>
                                <FormatMathText text={item.question.explanation} />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="genshin-btn px-12 py-4 text-xl" onClick={() => handleFinalComplete(null)}>
                    Finish Domain
                </button>
            </div>
        );
    }

    const progressPercent = ((currentIndex + 1) / questionsList.length) * 100;

    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-[900px] mx-auto pb-12">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between items-end">
                  <span className="glow-text text-xl font-black uppercase tracking-widest" style={{
                      color: phase === 'learning' ? 'var(--celestial-blue)' : 'var(--geo-gold)',
                  }}>
                      {isWeaknessMode ? '🔥 Distortion Cleansing' : (phase === 'learning' ? '📘 Initial Resonance' : '⚡ Final Ascension')}
                  </span>
                  <span className="font-bold opacity-70" style={{ fontSize: '1.2rem' }}>
                      Node {currentIndex + 1} of {questionsList.length}
                  </span>
              </div>
              <div className="progress-container">
                <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            <div className="glass-panel w-full p-10 md:p-14 relative overflow-visible">
                {/* Decorative Frame */}
                <div className="absolute top-[-10px] left-[-10px] w-20 h-20 border-t-4 border-l-4 border-btn shadow-2xl opacity-40" />
                <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 border-b-4 border-r-4 border-btn shadow-2xl opacity-40" />

                <div className="question-text mb-12" style={{ fontSize: 'clamp(1.25rem, 4vw, 2.1rem)', fontWeight: 700, lineHeight: 1.4 }}>
                    <FormatMathText text={question.text} />
                </div>

                <div className="grid grid-cols-1 gap-5">
                    {question.options.map((option, idx) => {
                        let btnStyle = { textAlign: 'left', justifyContent: 'flex-start', padding: '1.25rem 2rem' };
                        let labelColor = 'var(--text-muted)';
                        
                        if (phase === 'learning' && hasAnswered) {
                            if (idx === question.correctAnswer) {
                                btnStyle = { ...btnStyle, background: 'var(--emerald-green)', color: 'white', borderColor: 'var(--emerald-green)', boxShadow: '0 0 25px var(--emerald-green)88' };
                                labelColor = 'white';
                            } else if (idx === selectedOption) {
                                btnStyle = { ...btnStyle, background: 'var(--pyro-red)', color: 'white', borderColor: 'var(--pyro-red)', opacity: 0.8 };
                                labelColor = 'white';
                            } else {
                                btnStyle = { ...btnStyle, opacity: 0.4, grayscale: 1 };
                            }
                        } else if (idx === selectedOption) {
                            btnStyle = { ...btnStyle, borderColor: 'var(--celestial-blue)', background: 'var(--celestial-blue)11', transform: 'scale(1.02)' };
                        }

                        return (
                            <button
                                key={idx}
                                className="genshin-btn w-full flex items-center group transition-all"
                                style={btnStyle}
                                onClick={() => handleSelectOption(idx)}
                                disabled={hasAnswered && phase === 'learning'}
                            >
                                <span className="mr-6 font-black text-2xl transition-colors" style={{ color: labelColor, opacity: 0.5 }}>
                                    {String.fromCharCode(65 + idx)}
                                </span>
                                <div className="flex-1 font-semibold text-lg">
                                    <FormatMathText text={option} />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {phase === 'learning' && hasAnswered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-12 p-8 rounded-3xl relative overflow-hidden" 
                      style={{ 
                        background: isCorrect ? 'var(--emerald-green)11' : 'var(--pyro-red)11',
                        border: `2px solid ${isCorrect ? 'var(--emerald-green)33' : 'var(--pyro-red)33'}`
                      }}
                    >
                        <h4 style={{ color: isCorrect ? 'var(--emerald-green)' : 'var(--pyro-red)', marginBottom: 'var(--space-2)', fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase' }}>
                            {isCorrect ? '✨ Resonance Established' : '⚠️ Sigil Misaligned'}
                        </h4>
                        <div className="font-medium" style={{ lineHeight: 1.7, fontSize: '1.15rem' }}>
                            <FormatMathText text={question.explanation} />
                        </div>
                    </motion.div>
                )}
            </div>

            {phase === 'learning' && hasAnswered && (
                <button 
                  className="genshin-btn px-16 py-4 text-xl" 
                  style={{ animation: 'pulse-glow 2s infinite' }}
                  onClick={handleNext} 
                >
                    {currentIndex < questionsList.length - 1 ? 'Continue Domain Path' : 'Initiate Final Ascension'}
                </button>
            )}
        </div>
    );
}


