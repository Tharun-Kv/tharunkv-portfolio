'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  icon,
  className = '',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden group rounded-full';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-[#e5e5e5]',
    secondary: 'border border-[#333] bg-transparent text-white hover:border-[#666] hover:bg-[#111]',
    ghost: 'bg-transparent text-[#888] hover:text-white',
  };

  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const innerContent = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block relative z-10"
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <span>{icon}</span>}
        {external && <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />}
      </span>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={combinedClassName}>
          {innerContent}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={combinedClassName}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {innerContent}
    </button>
  );
}
