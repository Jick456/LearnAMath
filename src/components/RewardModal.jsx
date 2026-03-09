import React from 'react';
import './components.css';
import Button from './Button';
import Confetti from './Confetti';

export default function RewardModal({ show, onClose, title, rewardText, rewardImage }) {
    if (!show) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease'
        }}>
            <Confetti />

            <div className="card" style={{ maxWidth: '400px', width: '90%', textAlign: 'center', animation: 'scaleUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>{title}</h2>

                <div style={{ width: '150px', height: '150px', margin: 'var(--space-4) auto', animation: 'float 4s infinite ease-in-out', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {rewardImage ? (
                        <img src={rewardImage} alt="Reward" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))' }} />
                    ) : (
                        <div style={{ fontSize: '4rem' }}>🌟</div>
                    )}
                </div>

                <p style={{ fontSize: '1.25rem', marginBottom: 'var(--space-6)', fontWeight: 600 }}>
                    {rewardText}
                </p>

                <Button variant="primary" onClick={onClose} style={{ width: '100%' }}>
                    Awesome!
                </Button>
            </div>

            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.8) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
      `}</style>
        </div>
    );
}
