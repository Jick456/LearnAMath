import React from 'react';
import { motion } from 'framer-motion';

const TrigonometryVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--surface-sub)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
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

const StatisticsVisualizer = () => {
    const bars = [60, 100, 40, 80, 55];
    const colors = ['#60a5fa', '#34d399', '#f87171', '#a78bfa', '#fbbf24'];
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="220" height="160" viewBox="0 0 220 160">
                <line x1="20" y1="130" x2="200" y2="130" stroke="var(--text-muted)" strokeWidth="2" />
                <line x1="20" y1="20" x2="20" y2="130" stroke="var(--text-muted)" strokeWidth="2" />
                {bars.map((h, i) => (
                    <motion.rect
                        key={i}
                        x={30 + i * 36}
                        y="130"
                        width="26"
                        height="0"
                        fill={colors[i]}
                        initial={{ height: 0, y: 130 }}
                        animate={{ height: h, y: 130 - h }}
                        transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
                    />
                ))}
                <text x="110" y="150" fill="var(--text-muted)" fontSize="11" textAnchor="middle">Data Distribution</text>
            </svg>
        </div>
    );
};

const ProbabilityVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
            <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ fontSize: '4rem' }}
            >🎲</motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['1/6', '2/6', '3/6'].map((frac, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                        style={{ fontSize: '1.1rem', fontWeight: 700, color: ['#60a5fa', '#34d399', '#fbbf24'][i] }}
                    >
                        P = {frac}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const NumberVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="280" height="100" viewBox="0 0 280 100">
                <line x1="10" y1="50" x2="270" y2="50" stroke="var(--text-muted)" strokeWidth="2" />
                {[-3, -2, -1, 0, 1, 2, 3].map((val, i) => (
                    <g key={val} transform={`translate(${20 + i * 35}, 0)`}>
                        <line x1="0" y1="44" x2="0" y2="56" stroke="var(--text-muted)" strokeWidth="2" />
                        <text x="0" y="72" fill={val < 0 ? '#ef4444' : val > 0 ? '#34d399' : 'var(--geo-gold)'} fontSize="13" textAnchor="middle">{val}</text>
                    </g>
                ))}
                <motion.circle
                    cx="55" cy="50" r="7"
                    fill="#60a5fa"
                    initial={{ cx: 55 }}
                    animate={{ cx: [55, 195, 55] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
            </svg>
        </div>
    );
};

const FinanceVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
            <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--emerald-green)' }}
            >💰 A = P(1 + r/n)ⁿᵗ</motion.div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>P = Principal</span>
                <span>r = Rate</span>
                <span>t = Time</span>
            </div>
        </div>
    );
};

const SetsVisualizer = () => (
    <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <svg width="220" height="150" viewBox="0 0 220 150">
            <rect x="10" y="10" width="200" height="130" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,4" rx="8" />
            <circle cx="85" cy="75" r="45" fill="rgba(96,165,250,0.3)" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="135" cy="75" r="45" fill="rgba(52,211,153,0.3)" stroke="#34d399" strokeWidth="2" />
            <text x="65" y="78" fill="var(--text-main)" fontSize="13" textAnchor="middle" fontWeight="bold">A</text>
            <text x="155" y="78" fill="var(--text-main)" fontSize="13" textAnchor="middle" fontWeight="bold">B</text>
            <text x="110" y="78" fill="#fff" fontSize="11" textAnchor="middle" fontWeight="bold">A∩B</text>
            <text x="110" y="135" fill="var(--text-muted)" fontSize="11" textAnchor="middle">Universal Set ξ</text>
        </svg>
    </div>
);

const RatioVisualizer = () => {
    return (
        <div style={{ width: '100%', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '1rem' }}>
            {[3, 2].map((parts, groupIdx) => (
                <React.Fragment key={groupIdx}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {Array.from({ length: parts }).map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                                style={{ width: '36px', height: '60px', borderRadius: '6px', background: groupIdx === 0 ? '#60a5fa' : '#34d399', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '4px', fontSize: '11px', fontWeight: 700, color: '#fff' }}
                            >{i + 1}</motion.div>
                        ))}
                    </div>
                    {groupIdx === 0 && <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--geo-gold)' }}>:</div>}
                </React.Fragment>
            ))}
            <div style={{ marginLeft: '12px', fontSize: '1.2rem', fontWeight: 800, color: 'var(--geo-gold)' }}>3 : 2</div>
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
    if (tid.includes('algebra') || tid.includes('quad') || tid.includes('eq') || tid.includes('linear') || tid.includes('polynomial')) return <AlgebraVisualizer />;
    if (tid.includes('mensuration') || tid.includes('geom') || tid.includes('volume') || tid.includes('area')) return <MensurationVisualizer />;
    if (tid.includes('stat') || tid.includes('data') || tid.includes('graph')) return <StatisticsVisualizer />;
    if (tid.includes('prob')) return <ProbabilityVisualizer />;
    if (tid.includes('number') || tid.includes('integer') || tid.includes('fraction') || tid.includes('ratio') || tid.includes('rate') || tid.includes('proportion')) return <RatioVisualizer />;
    if (tid.includes('set')) return <SetsVisualizer />;
    if (tid.includes('finance') || tid.includes('interest') || tid.includes('money')) return <FinanceVisualizer />;
    if (tid.includes('num') || tid.includes('arithmetic') || tid.includes('index')) return <NumberVisualizer />;

    return <DefaultVisualizer emoji={emoji} />;
}
