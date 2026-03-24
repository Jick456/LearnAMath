import React from 'react';
import { motion } from 'framer-motion';

export default function MathDiagram({ type }) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '1.5rem 0',
    };

    const svgStyle = {
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255,255,255,0.05)',
        padding: '1rem',
        maxWidth: '100%',
        height: 'auto'
    };

    const strokeColor = 'var(--primary-glow, #3b82f6)';
    const textColor = 'var(--text-main, #e2e8f0)';
    const fillColor = 'rgba(59, 130, 246, 0.2)';
    const accentColor = 'var(--accent-warning, #f59e0b)';

    // Different diagram types
    let content = null;

    if (type === 'right-triangle') {
        content = (
            <svg width="250" height="200" viewBox="0 0 250 200" style={svgStyle}>
                <defs>
                    <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={strokeColor} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={strokeColor} stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                {/* Triangle */}
                <polygon points="40,160 210,160 40,40" fill="url(#triGrad)" stroke={strokeColor} strokeWidth="3" strokeLinejoin="round" />
                {/* Right angle square */}
                <polyline points="40,140 60,140 60,160" fill="none" stroke={strokeColor} strokeWidth="2" />
                {/* Labels */}
                <text x="125" y="185" fill={textColor} fontSize="16" textAnchor="middle" fontFamily="sans-serif">Base (b) / Adjacent</text>
                <text x="20" y="100" fill={textColor} fontSize="16" textAnchor="middle" fontFamily="sans-serif" transform="rotate(-90 20,100)">Height (a) / Opposite</text>
                <text x="145" y="90" fill={accentColor} fontSize="16" textAnchor="middle" fontFamily="sans-serif" transform="rotate(35 145,90)">Hypotenuse (c)</text>
                {/* Theta curve */}
                <path d="M 180,160 A 30,30 0 0,1 185.5,142.7" fill="none" stroke={accentColor} strokeWidth="2" />
                <text x="175" y="145" fill={accentColor} fontSize="16" fontFamily="sans-serif">θ</text>
            </svg>
        );
    } else if (type === 'circle') {
        content = (
            <svg width="220" height="220" viewBox="0 0 220 220" style={svgStyle}>
                <circle cx="110" cy="110" r="80" fill={fillColor} stroke={strokeColor} strokeWidth="3" />
                {/* Center dot */}
                <circle cx="110" cy="110" r="4" fill={accentColor} />
                {/* Radius */}
                <line x1="110" y1="110" x2="190" y2="110" stroke={accentColor} strokeWidth="2" strokeDasharray="5,5" />
                <text x="150" y="100" fill={textColor} fontSize="16" fontFamily="sans-serif">Radius (r)</text>
                {/* Diameter hint */}
                <line x1="30" y1="110" x2="110" y2="110" stroke={strokeColor} strokeWidth="1" strokeDasharray="3,3" />
            </svg>
        );
    } else if (type === 'parabola') {
        content = (
            <svg width="250" height="250" viewBox="0 0 250 250" style={svgStyle}>
                {/* Axes */}
                <line x1="20" y1="180" x2="230" y2="180" stroke={textColor} strokeWidth="2" strokeOpacity="0.5" />
                <line x1="80" y1="40" x2="80" y2="230" stroke={textColor} strokeWidth="2" strokeOpacity="0.5" />
                {/* Parabola curve */}
                <path d="M 60,60 Q 140,380 220,60" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                {/* Turning point */}
                <circle cx="140" cy="220" r="5" fill={accentColor} />
                <text x="140" y="240" fill={accentColor} fontSize="14" textAnchor="middle" fontFamily="sans-serif">Peak (3, -2)</text>
                {/* Roots */}
                <circle cx="100" cy="180" r="4" fill={strokeColor} />
                <circle cx="180" cy="180" r="4" fill={strokeColor} />
                <text x="100" y="195" fill={textColor} fontSize="12" textAnchor="middle" fontFamily="sans-serif">(1, 0)</text>
                <text x="180" y="195" fill={textColor} fontSize="12" textAnchor="middle" fontFamily="sans-serif">(5, 0)</text>
                {/* Y-intercept */}
                <circle cx="80" cy="130" r="4" fill={strokeColor} />
                <text x="65" y="135" fill={textColor} fontSize="12" textAnchor="end" fontFamily="sans-serif">(0, 2.5)</text>
            </svg>
        );
    } else if (type === 'cylinder') {
        content = (
            <svg width="200" height="240" viewBox="0 0 200 240" style={svgStyle}>
                {/* Top ellipse */}
                <ellipse cx="100" cy="50" rx="60" ry="20" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                {/* Bottom ellipse */}
                <ellipse cx="100" cy="190" rx="60" ry="20" fill="rgba(15, 23, 42, 0.4)" stroke={strokeColor} strokeWidth="2" />
                {/* Body lines */}
                <line x1="40" y1="50" x2="40" y2="190" stroke={strokeColor} strokeWidth="2" />
                <line x1="160" y1="50" x2="160" y2="190" stroke={strokeColor} strokeWidth="2" />
                {/* Radius */}
                <line x1="100" y1="50" x2="160" y2="50" stroke={accentColor} strokeWidth="2" strokeDasharray="4,4" />
                <text x="120" y="45" fill={textColor} fontSize="14" fontFamily="sans-serif">r</text>
                {/* Height */}
                <line x1="180" y1="50" x2="180" y2="190" stroke={textColor} strokeWidth="1" strokeDasharray="4,4" />
                <text x="190" y="120" fill={textColor} fontSize="14" fontFamily="sans-serif">h</text>
            </svg>
        );
    } else if (type === 'number-line') {
        content = (
            <svg width="300" height="120" viewBox="0 0 300 120" style={svgStyle}>
                <line x1="20" y1="60" x2="280" y2="60" stroke={textColor} strokeWidth="2" />
                {[-3, -2, -1, 0, 1, 2, 3].map((val, i) => (
                    <g key={val} transform={`translate(${30 + i * 36.6}, 0)`}>
                        <line x1="0" y1="55" x2="0" y2="65" stroke={textColor} strokeWidth="2" />
                        <text x="0" y="85" fill={val < 0 ? '#ef4444' : val > 0 ? '#34d399' : textColor} fontSize="14" textAnchor="middle" fontFamily="sans-serif">{val}</text>
                    </g>
                ))}
                {/* Arrow jumping from -2 to 1 (+3) */}
                <path d="M 66.6,50 Q 121.6,10 176.4,50" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="4,4" />
                <polygon points="176.4,50 167,46 170,40" fill={accentColor} transform="rotate(35 176.4 50)" />
                <text x="121.6" y="25" fill={accentColor} fontSize="14" textAnchor="middle" fontFamily="sans-serif">+3</text>
            </svg>
        );
    } else if (type === 'balance-scale') {
        content = (
            <svg width="250" height="180" viewBox="0 0 250 180" style={svgStyle}>
                {/* Base & Pillar */}
                <polygon points="105,160 145,160 125,50" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                {/* Beam */}
                <line x1="50" y1="50" x2="200" y2="50" stroke={textColor} strokeWidth="4" />
                {/* Left Pan */}
                <line x1="50" y1="50" x2="30" y2="100" stroke={textColor} strokeWidth="1" />
                <line x1="50" y1="50" x2="70" y2="100" stroke={textColor} strokeWidth="1" />
                <path d="M 20,100 Q 50,120 80,100 Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                <rect x="35" y="70" width="30" height="30" rx="4" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2" />
                <text x="50" y="90" fill="#fff" fontSize="14" textAnchor="middle" fontFamily="sans-serif">x</text>
                {/* Right Pan */}
                <line x1="200" y1="50" x2="180" y2="100" stroke={textColor} strokeWidth="1" />
                <line x1="200" y1="50" x2="220" y2="100" stroke={textColor} strokeWidth="1" />
                <path d="M 170,100 Q 200,120 230,100 Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                <circle cx="190" cy="85" r="10" fill="#34d399" />
                <circle cx="210" cy="85" r="10" fill="#34d399" />
                <circle cx="200" cy="70" r="10" fill="#34d399" />
                <text x="125" y="30" fill={accentColor} fontSize="16" textAnchor="middle" fontFamily="sans-serif">Left = Right</text>
            </svg>
        );
    } else if (type === 'fraction-pie') {
        content = (
            <svg width="200" height="200" viewBox="0 0 200 200" style={svgStyle}>
                {/* Pie segments */}
                <path d="M 100,100 L 100,20 A 80,80 0 0,1 180,100 Z" fill="#60a5fa" stroke="#fff" strokeWidth="2" />
                <path d="M 100,100 L 180,100 A 80,80 0 1,1 100,20 Z" fill="#e2e8f0" stroke="#fff" strokeWidth="2" />
                <text x="140" y="60" fill="#fff" fontSize="18" textAnchor="middle" fontWeight="bold">1/4</text>
                <text x="70" y="140" fill="#1e293b" fontSize="18" textAnchor="middle" fontWeight="bold">3/4 (75%)</text>
            </svg>
        );
    } else if (type === 'bar-chart') {
        content = (
            <svg width="250" height="200" viewBox="0 0 250 200" style={svgStyle}>
                <line x1="30" y1="160" x2="220" y2="160" stroke={textColor} strokeWidth="2" />
                <line x1="30" y1="20" x2="30" y2="160" stroke={textColor} strokeWidth="2" />
                {/* Bars */}
                <rect x="50" y="100" width="30" height="60" fill="#60a5fa" />
                <rect x="100" y="60" width="30" height="100" fill="#34d399" />
                <rect x="150" y="120" width="30" height="40" fill="#f87171" />
                {/* Labels */}
                <text x="65" y="180" fill={textColor} fontSize="12" textAnchor="middle">A</text>
                <text x="115" y="180" fill={textColor} fontSize="12" textAnchor="middle">B</text>
                <text x="165" y="180" fill={textColor} fontSize="12" textAnchor="middle">C</text>
            </svg>
        );
    } else if (type === 'polygon') {
        content = (
            <svg width="200" height="200" viewBox="0 0 200 200" style={svgStyle}>
                <polygon points="100,20 180,80 150,170 50,170 20,80" fill={fillColor} stroke={strokeColor} strokeWidth="3" strokeLinejoin="round" />
                {/* Interior Angle */}
                <path d="M 43.7,151.0 A 20,20 0 0,0 70,170" fill="none" stroke={accentColor} strokeWidth="2" />
                <text x="75" y="155" fill={accentColor} fontSize="12">Int.</text>
                {/* Exterior Angle */}
                <line x1="50" y1="170" x2="10" y2="170" stroke={textColor} strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 30,170 A 20,20 0 0,1 43.7,151.0" fill="none" stroke="#f472b6" strokeWidth="2" />
                <text x="25" y="145" fill="#f472b6" fontSize="12">Ext.</text>
            </svg>
        );
    } else if (type === 'venn-diagram') {
        content = (
            <svg width="250" height="180" viewBox="0 0 250 180" style={svgStyle}>
                <circle cx="95" cy="90" r="50" fill="rgba(96, 165, 250, 0.4)" stroke="#60a5fa" strokeWidth="2" />
                <circle cx="155" cy="90" r="50" fill="rgba(52, 211, 153, 0.4)" stroke="#34d399" strokeWidth="2" />
                <text x="75" y="95" fill={textColor} fontSize="14" textAnchor="middle">A</text>
                <text x="175" y="95" fill={textColor} fontSize="14" textAnchor="middle">B</text>
                <text x="125" y="95" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">A ∩ B</text>
            </svg>
        );
    } else if (type === 'prism-volume') {
        content = (
            <svg width="250" height="250" viewBox="0 0 250 250" style={svgStyle}>
                {/* 3D Prism Volume extrusion */}
                {/* Back Base (semi-transparent) */}
                <polygon points="100,60 180,60 150,110 70,110" fill="rgba(96, 165, 250, 0.2)" stroke={strokeColor} strokeWidth="1" strokeDasharray="3,3" />

                {/* Connecting Lines (Height/Length) */}
                <line x1="100" y1="60" x2="100" y2="160" stroke={strokeColor} strokeWidth="2" />
                <line x1="180" y1="60" x2="180" y2="160" stroke={strokeColor} strokeWidth="2" />
                <line x1="150" y1="110" x2="150" y2="210" stroke={strokeColor} strokeWidth="2" />
                <line x1="70" y1="110" x2="70" y2="210" stroke={strokeColor} strokeWidth="2" />

                {/* Front Base (Highlighted Cross-Section Area) */}
                <polygon points="100,160 180,160 150,210 70,210" fill={fillColor} stroke={strokeColor} strokeWidth="3" />
                <text x="125" y="190" fill={textColor} fontSize="14" textAnchor="middle" fontWeight="bold">Area (A)</text>

                {/* Height Label */}
                <line x1="200" y1="60" x2="200" y2="160" stroke={accentColor} strokeWidth="2" />
                <polygon points="200,60 196,68 204,68" fill={accentColor} />
                <polygon points="200,160 196,152 204,152" fill={accentColor} />
                <text x="215" y="115" fill={accentColor} fontSize="16" fontWeight="bold">h</text>

                {/* Formula */}
                <text x="125" y="30" fill={accentColor} fontSize="16" textAnchor="middle" fontWeight="bold">Volume = A × h</text>
            </svg>
        );
    } else if (type === 'completing-square') {
        content = (
            <svg width="250" height="250" viewBox="0 0 250 250" style={svgStyle}>
                {/* Visualization of completing the square */}
                {/* The main x^2 square */}
                <rect x="50" y="50" width="100" height="100" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                <text x="100" y="105" fill={textColor} fontSize="16" textAnchor="middle">x²</text>

                {/* The original bx rectangle split into two (b/2)x rectangles */}
                <rect x="150" y="50" width="40" height="100" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" strokeWidth="2" />
                <text x="170" y="105" fill="#34d399" fontSize="12" textAnchor="middle" transform="rotate(-90 170 105)">(b/2)x</text>

                <rect x="50" y="150" width="100" height="40" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" strokeWidth="2" />
                <text x="100" y="175" fill="#34d399" fontSize="12" textAnchor="middle">(b/2)x</text>

                {/* The missing piece to "complete" the square */}
                <rect x="150" y="150" width="40" height="40" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4,4" />
                <text x="170" y="175" fill="#f43f5e" fontSize="14" textAnchor="middle" fontWeight="bold">?</text>

                {/* Labels */}
                <line x1="50" y1="40" x2="150" y2="40" stroke={textColor} strokeWidth="1" />
                <text x="100" y="30" fill={textColor} fontSize="14" textAnchor="middle">x</text>

                <line x1="150" y1="40" x2="190" y2="40" stroke="#34d399" strokeWidth="1" />
                <text x="170" y="30" fill="#34d399" fontSize="14" textAnchor="middle">b/2</text>

                <text x="125" y="220" fill={accentColor} fontSize="14" textAnchor="middle">Add (b/2)² to Complete!</text>
            </svg>
        );
    } else if (type === 'simultaneous-lines') {
        content = (
            <svg width="250" height="250" viewBox="0 0 250 250" style={svgStyle}>
                {/* Axes */}
                <line x1="20" y1="200" x2="230" y2="200" stroke={textColor} strokeWidth="2" strokeOpacity="0.5" />
                <line x1="50" y1="20" x2="50" y2="230" stroke={textColor} strokeWidth="2" strokeOpacity="0.5" />

                {/* Line 1 (y = x + 1) */}
                <line x1="20" y1="200" x2="200" y2="20" stroke="#60a5fa" strokeWidth="3" />
                <text x="190" y="30" fill="#60a5fa" fontSize="12" fontWeight="bold">Line 1</text>

                {/* Line 2 (y = -x + 5) */}
                <line x1="20" y1="20" x2="230" y2="230" stroke="#f472b6" strokeWidth="3" />
                <text x="210" y="220" fill="#f472b6" fontSize="12" fontWeight="bold">Line 2</text>

                {/* Intersection Point (Math x=2, y=3) -> mapped to (110, 110) visually */}
                <circle cx="110" cy="110" r="6" fill={accentColor} />

                {/* Dashed lines to axes */}
                <line x1="110" y1="110" x2="110" y2="200" stroke={accentColor} strokeWidth="2" strokeDasharray="4,4" />
                <line x1="110" y1="110" x2="50" y2="110" stroke={accentColor} strokeWidth="2" strokeDasharray="4,4" />

                {/* Point Label */}
                <text x="110" y="95" fill={accentColor} fontSize="14" textAnchor="middle" fontWeight="bold">Sol (2, 3)</text>
            </svg>
        );
    } else if (type === 'angle') {
        content = (
            <svg width="200" height="200" viewBox="0 0 200 200" style={svgStyle}>
                {/* Two rays meeting at vertex (50, 150) */}
                <line x1="50" y1="150" x2="180" y2="150" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="150" x2="150" y2="50" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                {/* Angle arc */}
                <path d="M 90,150 A 40,40 0 0,0 78.3,121.7" fill="none" stroke={accentColor} strokeWidth="2" />
                <text x="95" y="135" fill={accentColor} fontSize="18" fontWeight="bold">θ</text>
                <text x="50" y="170" fill={textColor} fontSize="14" textAnchor="middle">Vertex</text>
            </svg>
        );
    } else {
        return null; // Fallback if unrecognized
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={containerStyle}
            className="math-diagram-container"
        >
            {content}
        </motion.div>
    );
}
