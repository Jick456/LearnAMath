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
                    x="90" y="65"
                    fill="var(--secondary)"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle"
                    transform="rotate(-32 90,65)"
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

const MensurationVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="200" height="150" viewBox="0 0 200 150">
                <motion.path
                    d="M 50 120 L 150 120 L 170 80 L 70 80 Z"
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    animate={{ fillOpacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                    d="M 50 120 L 50 60 L 150 60 L 150 120 M 50 60 L 70 20 L 170 20 L 150 60 M 170 20 L 170 80"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                />
                <text x="100" y="140" fill="var(--text-muted)" fontSize="12" textAnchor="middle">Volume = Base × Height</text>
            </svg>
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
    const tid = topicId?.toLowerCase() || '';
    if (tid.includes('trig') || tid.includes('pythagoras')) return <TrigonometryVisualizer />;
    if (tid.includes('algebra') || tid.includes('quad') || tid.includes('eq')) return <AlgebraVisualizer />;
    if (tid.includes('mensuration') || tid.includes('geom')) return <MensurationVisualizer />;

    return <DefaultVisualizer emoji={emoji} />;
}
