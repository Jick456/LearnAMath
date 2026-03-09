import React from 'react';
import { motion } from 'framer-motion';
import './components.css';

export default function Button({ children, variant = 'primary', onClick, className = '', style = {}, ...props }) {
    return (
        <motion.button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            style={style}
            whileHover={{ scale: 1.03, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
