import React from 'react';
import Card from './Card';
import Button from './Button';

export default function StoryIntro({ topic, onContinue }) {
    if (!topic) return null;

    return (
        <div className="flex flex-col items-center justify-center w-full" style={{ minHeight: '60vh', animation: 'fadeIn 0.5s ease' }}>
            <Card style={{ padding: 'var(--space-8)', maxWidth: '600px', width: '100%', textAlign: 'center', backgroundColor: 'var(--surface)' }}>
                <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)', filter: 'drop-shadow(0 0 15px var(--primary-glow))' }}>
                    {topic.emoji}
                </div>

                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>
                    {topic.location || 'Unknown Territory'}
                </h2>

                <h3 style={{ color: topic.color, fontSize: '1.25rem', marginBottom: 'var(--space-6)' }}>
                    {topic.title}
                </h3>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-main)',
                    marginBottom: 'var(--space-8)',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    padding: 'var(--space-4)',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `4px solid ${topic.color}`
                }}>
                    "{topic.storyline || 'Prepare yourself for the challenges ahead.'}"
                </p>

                <Button
                    size="lg"
                    onClick={onContinue}
                    style={{ width: '100%', fontSize: '1.25rem', padding: 'var(--space-4)', backgroundColor: topic.color }}
                >
                    Begin Journey
                </Button>
            </Card>
        </div>
    );
}
