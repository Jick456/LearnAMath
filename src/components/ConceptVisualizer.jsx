import React from 'react';
import { motion } from 'framer-motion';

const TrigonometryVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
            <svg width="200" height="150" viewBox="0 0 200 150">
                <motion.path
                    d="M 20 130 L 180 130 L 180 30 Z"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <text x="100" y="145" fill="var(--text-muted)" fontSize="12" textAnchor="middle">Adjacent</text>
                <text x="185" y="80" fill="var(--text-muted)" fontSize="12" style={{ writingMode: 'vertical-rl' }}>Opposite</text>
                <motion.text
                    x="50" y="70"
                    fill="var(--secondary)"
                    fontSize="14"
                    fontWeight="bold"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    Hypotenuse
                </motion.text>
            </svg>
        </div>
    );
};

const AlgebraVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '60px', height: '60px', background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}
            >
                x²
            </motion.div>
            <div style={{ fontSize: '24px' }}>+</div>
            <motion.div
                animate={{ width: [40, 60, 40] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ height: '60px', background: 'var(--secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}
            >
                2x
            </motion.div>
        </div>
    );
};

const DefaultVisualizer = ({ emoji }) => (
    <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ fontSize: '5rem' }}
    >
        {emoji}
    </motion.div>
);

export default function ConceptVisualizer({ topicId, emoji }) {
    if (topicId?.includes('trig')) return <TrigonometryVisualizer />;
    if (topicId?.includes('algebra')) return <AlgebraVisualizer />;

    return <DefaultVisualizer emoji={emoji} />;
}
