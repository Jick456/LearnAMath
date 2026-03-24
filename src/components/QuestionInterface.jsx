import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import analytics from '../utils/analytics';
import DOMPurify from 'dompurify';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import MathDiagram from './MathDiagrams';
import { FormatMathText } from './FormatMathText';


export default function QuestionInterface({ questionsObj, onComplete, onGainXp, onMissedQuestion, isWeaknessMode, activeCharacter }) {
    const [phase, setPhase] = useState(isWeaknessMode ? 'testing' : 'learning');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [testAnswers, setTestAnswers] = useState([]);
    const [startTime] = useState(Date.now());

    // Safely extract the questions list depending on the phase
    const getQuestionsList = () => {
        if (phase === 'review') return testAnswers.map(a => a.question);
        const rawList = isWeaknessMode ? questionsObj : (questionsObj ? (questionsObj[phase] || []) : []);

        // Sort by difficulty: easy -> medium -> hard
        const weight = { 'easy': 1, 'medium': 2, 'hard': 3 };
        return [...rawList].sort((a, b) => (weight[a.difficulty] || 2) - (weight[b.difficulty] || 2));
    };
    const questionsList = getQuestionsList();

    // Handle empty or exhausted question lists
    if (!questionsList || questionsList.length === 0) {
        if (phase === 'learning' && !isWeaknessMode) {
            // Auto-transition to testing phase if learning phase is empty but object exists
            if (questionsObj && questionsObj['testing'] && questionsObj['testing'].length > 0) {
                setPhase('testing');
                setCurrentIndex(0);
                return null;
            }
        }
        if (phase !== 'review') {
            return (
                <Card style={{ textAlign: 'center', padding: 'var(--space-8)', maxWidth: '600px', margin: '0 auto' }}>
                    <h3 className="glow-text">Module Complete!</h3>
                    <Button onClick={() => onComplete(null)} style={{ marginTop: 'var(--space-6)' }}>Return to Menu</Button>
                </Card>
            );
        }
    }

    const question = questionsList[currentIndex];
    // Protect against undefined questions
    if (!question) return null;

    const isCorrect = selectedOption === question.correctAnswer;

    const handleSelectOption = (index) => {
        if (hasAnswered) return;
        setSelectedOption(index);

        // In testing phase, we don't show instant feedback, we just record and move on
        if (phase === 'testing') {
            const isAnsCorrect = index === question.correctAnswer;

            analytics.trackQuestionResult(question.topicId || 'unknown', question.id, question.difficulty, isAnsCorrect);

            setTestAnswers(prev => [...prev, {
                question,
                selectedOption: index,
                isCorrect: isAnsCorrect
            }]);

            if (isAnsCorrect) {
                onGainXp(question.xpReward * 2); // Double XP for testing!
            } else {
                if (onMissedQuestion) onMissedQuestion(question);
            }

            // Short delay then next question
            setTimeout(() => {
                handleNext();
            }, 800);
        } else {
            // Learning phase: show immediate feedback
            const isAnsCorrect = index === question.correctAnswer;
            analytics.trackQuestionResult(question.topicId || 'unknown', question.id, question.difficulty, isAnsCorrect);

            setHasAnswered(true);
            if (isAnsCorrect) {
                onGainXp(question.xpReward);
            } else {
                if (onMissedQuestion) onMissedQuestion(question);
            }
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
            // Completed current array
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
            <div className="flex flex-col items-center gap-6 w-full max-w-[800px] mx-auto" style={{ animation: 'fadeIn 0.5s ease' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>Test Results Review</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>You scored {correctCount} out of {testAnswers.length}</p>

                <div className="flex flex-col gap-6 w-full">
                    {testAnswers.map((item, idx) => (
                        <Card key={idx} style={{ padding: 'var(--space-6)', borderLeft: `6px solid ${item.isCorrect ? 'var(--accent-success)' : 'var(--accent-error)'}` }}>
                            <div style={{ marginBottom: 'var(--space-4)', fontSize: '1.25rem' }}>
                                <strong>Q{idx + 1}:</strong> <FormatMathText text={item.question.text} />
                            </div>

                            <div style={{ padding: 'var(--space-3)', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-4)' }}>
                                <div style={{ color: item.isCorrect ? 'var(--accent-success)' : 'var(--accent-error)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                                    Your Answer: <FormatMathText text={item.question.options[item.selectedOption]} />
                                </div>
                                {!item.isCorrect && (
                                    <div style={{ color: 'var(--accent-success)' }}>
                                        Correct Answer: <FormatMathText text={item.question.options[item.question.correctAnswer]} />
                                    </div>
                                )}
                            </div>

                            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                <h4 style={{ color: 'var(--accent-info)', marginBottom: 'var(--space-2)' }}>Full Working / Explanation:</h4>
                                <FormatMathText text={item.question.explanation} />
                            </div>
                        </Card>
                    ))}
                </div>

                <Button size="lg" onClick={() => handleFinalComplete(null)} style={{ marginTop: 'var(--space-6)', minWidth: '200px' }}>
                    Finish Module
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-[800px] mx-auto" style={{ animation: 'fadeIn 0.5s ease' }}>
            <div className="w-full flex justify-between items-center" style={{ fontSize: '1.25rem' }}>
                <span style={{
                    color: phase === 'learning' ? 'var(--primary-hover)' : 'var(--accent-error)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {isWeaknessMode ? 'Weakness Review' : (phase === 'learning' ? '📘 Learning Phase' : '📝 Final Testing Phase')}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>
                    Q {currentIndex + 1} / {questionsList.length}
                </span>
            </div>

            {phase === 'testing' && !isWeaknessMode && (
                <div style={{ color: 'var(--accent-warning)', fontSize: '1rem', marginBottom: '-1rem', textAlign: 'center' }}>
                    ⚠️ <strong>Testing Phase:</strong> No instant explanations. Correct answers yield <strong>Double XP!</strong>
                </div>
            )}

            <Card style={{ width: '100%', padding: 'var(--space-8)' }}>
                <div className="question-text" style={{ marginBottom: 'var(--space-6)' }}>
                    <FormatMathText text={question.text} />
                </div>

                <div className="flex flex-col gap-4">
                    {question.options.map((option, idx) => {
                        let btnClass = "btn option-btn";
                        let animStyle = {};

                        if (phase === 'learning' && hasAnswered) {
                            if (idx === question.correctAnswer) {
                                animStyle = { backgroundColor: 'var(--accent-success)', color: 'white', borderColor: 'var(--accent-success)', boxShadow: '0 0 15px var(--accent-success)' };
                            } else if (idx === selectedOption) {
                                animStyle = { backgroundColor: 'var(--accent-error)', color: 'white', borderColor: 'var(--accent-error)', opacity: 0.7 };
                            } else {
                                animStyle = { opacity: 0.5 };
                            }
                        } else if (idx === selectedOption) {
                            btnClass = "btn option-btn option-btn-active";
                        }

                        return (
                            <button
                                key={idx}
                                className={btnClass}
                                style={{ width: '100%', padding: 'var(--space-4)', fontSize: '1.25rem', justifyContent: 'flex-start', textAlign: 'left', borderRadius: 'var(--radius-lg)', ...animStyle }}
                                onClick={() => handleSelectOption(idx)}
                                disabled={hasAnswered && phase === 'learning'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: 'var(--space-4)', fontWeight: 'bold', opacity: 0.7 }}>
                                        {String.fromCharCode(65 + idx)}.
                                    </span>
                                    <div style={{ flex: 1 }}>
                                        <FormatMathText text={option} />
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>


                {phase === 'learning' && hasAnswered && (
                    <div className="flex gap-4" style={{ marginTop: 'var(--space-8)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{ fontSize: '4rem' }}
                        >
                            {isCorrect ? '✨' : '😅'}
                        </motion.div>
                        <div style={{
                            flex: 1,
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                            borderLeft: `4px solid ${isCorrect ? 'var(--accent-success)' : 'var(--accent-error)'}`,
                            animation: 'fadeIn 0.5s ease'
                        }}>
                            <h4 style={{ color: isCorrect ? 'var(--accent-success)' : 'var(--accent-error)', marginBottom: 'var(--space-2)', fontSize: '1.25rem' }}>
                                {isCorrect ? '✨ Excellent! (XP gained)' : 'Not quite right. Let\'s review!'}
                            </h4>
                            <div style={{ lineHeight: 1.6, fontSize: '1.125rem' }}>
                                <FormatMathText text={question.explanation} />
                            </div>
                        </div>
                    </div>
                )}
            </Card>

            {/* Pet Feedback Overlay */}
            <AnimatePresence>
                {hasAnswered && (
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div className="glass-panel" style={{ padding: 'var(--space-3)', marginBottom: 'var(--space-2)', fontSize: '0.9rem', maxWidth: '150px' }}>
                            {isCorrect ? "Yay! You got it!" : "Don't give up! Look at the explanation."}
                        </div>
                        <div style={{ fontSize: '5rem' }}>{activeCharacter?.emoji}</div>
                    </motion.div>
                )}
            </AnimatePresence>

            {phase === 'learning' && hasAnswered && (
                <Button size="lg" onClick={handleNext} style={{ minWidth: '200px', animation: 'scaleUp 0.3s ease' }}>
                    {currentIndex < questionsList.length - 1 ? 'Next Question' : 'Proceed to Testing Phase'}
                </Button>
            )}
        </div>
    );
}

