import React from 'react';
import './components.css';

export default function ProgressBar({ progress, label }) {
    // Clamp progress between 0 and 100
    const width = Math.min(100, Math.max(0, progress));

    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <div className="flex justify-between" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    <span>{label}</span>
                    <span style={{ color: 'var(--primary-hover)' }}>{width}%</span>
                </div>
            )}
            <div className="progress-container">
                <div className="progress-fill" style={{ width: `${width}%` }} />
            </div>
        </div>
    );
}
