import React from 'react';
import { motion } from 'framer-motion';
import './components.css';

export default function Card({ children, className = '', style = {}, ...props }) {
    return (
        <motion.div
            className={`card glass-panel ${className}`}
            style={style}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
