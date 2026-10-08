'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface TechBadgeProps {
  name: string;
  className?: string;
  icon?: React.ReactNode;
}

export function TechBadge({ name, className = '', icon }: TechBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide border border-[#222] bg-[#111] text-[#a3a3a3] hover:text-white hover:border-[#444] hover:bg-[#1a1a1a] rounded-full transition-colors cursor-default ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{name}</span>
    </motion.div>
  );
}
