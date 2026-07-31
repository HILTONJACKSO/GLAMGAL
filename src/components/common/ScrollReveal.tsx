import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
