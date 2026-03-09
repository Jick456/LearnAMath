import React from 'react';
import Card from './Card';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function SubscriptionModal({ show, onClose, onUpgrade }) {
    if (!show) return null;

    return (
        <AnimatePresence>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    backdropFilter: 'blur(8px)',
                    padding: 'var(--space-4)'
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Card style={{
                        maxWidth: '500px',
                        width: '100%',
                        padding: 'var(--space-8)',
                        textAlign: 'center',
                        position: 'relative',
                        border: '2px solid var(--primary-main)',
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
                    }}>
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 'var(--space-4)',
                                right: 'var(--space-4)',
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '1.5rem'
                            }}
                        >
                            ✕
                        </button>

                        <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>💎</div>
                        <h2 className="glow-text" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>Unlock Premium</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-8)' }}>
                            Master advanced MOE topics and secure your A1 with full access to all modules.
                        </p>

                        <div style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <span style={{ color: 'var(--accent-success)' }}>✓</span>
                                    <span>Access all Sec 3/4 & Add Math Modules</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <span style={{ color: 'var(--accent-success)' }}>✓</span>
                                    <span>Unlimited AI-generated practice questions</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <span style={{ color: 'var(--accent-success)' }}>✓</span>
                                    <span>Exclusive legendary companion skins</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <span style={{ color: 'var(--accent-success)' }}>✓</span>
                                    <span>Detailed performance analytics & reports</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button
                                size="lg"
                                onClick={onUpgrade}
                                style={{
                                    width: '100%',
                                    fontSize: '1.25rem',
                                    background: 'linear-gradient(90deg, var(--primary-main), var(--primary-hover))'
                                }}
                            >
                                Upgrade for $19.99/mo
                            </Button>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                7-day money back guarantee • Cancel anytime
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
