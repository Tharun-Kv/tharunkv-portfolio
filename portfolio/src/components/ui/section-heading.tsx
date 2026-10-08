'use client';

import { motion } from 'framer-motion';
import { AnimatedText } from './animated-text';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' 
    ? 'items-center text-center' 
    : align === 'right' 
      ? 'items-end text-right' 
      : 'items-start text-left';

  return (
    <div className={`flex flex-col mb-16 md:mb-24 ${alignClass}`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-4 mb-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}
      >
        <span className="font-mono text-sm md:text-base text-[#888] font-medium tracking-widest">
          {number}
        </span>
        <div className="h-[1px] w-8 bg-[#333]" />
        {subtitle && (
          <span className="text-[#a3a3a3] text-sm md:text-base tracking-wide font-medium">
            {subtitle}
          </span>
        )}
      </motion.div>
      
      <div className="overflow-hidden">
        <AnimatedText 
          text={title}
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
        />
      </div>
    </div>
  );
}
