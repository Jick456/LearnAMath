import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CONFETTI_COLORS = ['#8b5cf6', '#a855f7', '#eab308', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#ec4899'];

export default function Confetti() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const createParticles = () => {
            const count = 80;
            const newParticles = [];
            for (let i = 0; i < count; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100 + 'vw',
                    size: Math.random() * 10 + 5,
                    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                    duration: Math.random() * 2 + 1.5,
                    delay: Math.random() * 0.2,
                    rotation: Math.random() * 360,
                    drift: (Math.random() - 0.5) * 200 // Will drift left or right randomly
                });
            }
            setParticles(newParticles);
        };
        createParticles();
    }, []);

    if (particles.length === 0) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: p.x, y: '-10vh', rotate: 0, opacity: 1 }}
                    animate={{
                        y: '110vh',
                        rotate: p.rotation * 4,
                        x: "calc(" + p.x + " + " + p.drift + "px)"
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{
                        position: 'absolute',
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                        boxShadow: "0 0 10px " + p.color + "88"
                    }}
                />
            ))}
        </div>
    );
}
