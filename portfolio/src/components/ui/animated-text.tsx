'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export function AnimatedText({ text, className = '', delay = 0, as: Component = 'span' }: AnimatedTextProps) {
  // Apple-style premium easing (easeOutExpo / smooth cubic-bezier)
  const premiumEasing = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // ~40ms stagger between characters
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: 'blur(8px)' 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2, // Cinematic, slow resolve
        ease: premiumEasing,
      },
    },
  };

  // Split text while preserving spaces
  const characters = text.split('');

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${index}-${char}`}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
