import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

export default function AccountSetup({ onComplete }) {
    const [selectedLevel, setSelectedLevel] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center w-full" style={{ minHeight: '80vh', animation: 'fadeIn 0.5s ease' }}>
            <Card style={{ padding: 'var(--space-8)', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>Welcome!</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
                    Before your journey begins, please select your academic stream. You can always change this later.
                </p>

                <div className="flex flex-col gap-4" style={{ marginBottom: 'var(--space-8)' }}>
                    {['G1', 'G2', 'G3'].map(level => {
                        const descriptions = {
                            'G1': 'Foundation Focus (Formerly N(T))',
                            'G2': 'Standard Focus (Formerly N(A))',
                            'G3': 'Advanced Focus (Formerly Express)'
                        };
                        const isActive = selectedLevel === level;
                        return (
                            <button
                                key={level}
                                className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setSelectedLevel(level)}
                                style={{
                                    padding: 'var(--space-4)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    border: isActive ? '2px solid var(--primary-hover)' : '2px solid transparent'
                                }}
                            >
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{level}</span>
                                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{descriptions[level]}</span>
                            </button>
                        );
                    })}
                </div>

                <Button
                    size="lg"
                    disabled={!selectedLevel}
                    onClick={() => onComplete(selectedLevel)}
                    style={{ width: '100%', opacity: selectedLevel ? 1 : 0.5 }}
                >
                    Begin Adventure
                </Button>
            </Card>
        </div>
    );
}
