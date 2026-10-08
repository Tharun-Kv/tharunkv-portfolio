'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/ui/icons';
import { AnimatedText } from '@/components/ui/animated-text';
import Link from 'next/link';
import { siteConfig } from '@/data/portfolio';

export default function Hero() {
  const [portfolioRevealed, setPortfolioRevealed] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const reveal = () => setPortfolioRevealed(true);
    if (document.documentElement.dataset.portfolioRevealed === 'true') reveal();
    window.addEventListener('portfolio:reveal', reveal);
    return () => window.removeEventListener('portfolio:reveal', reveal);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden z-10">
      <div className="container mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-20 pt-32 text-center z-10">
        
        <motion.div
          initial={false}
          animate={portfolioRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(6px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <span className="text-[#a3a3a3] font-medium tracking-wide text-sm md:text-base  bg-[#111] px-4 py-2 rounded-full border border-[#222]">
            Available for Engineering Roles
          </span>
        </motion.div>

        {/* Apple-style animated hero typography */}
        <motion.div
          initial={false}
          animate={portfolioRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(8px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <AnimatedText 
            text="Hello, I'm Tharun."
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-2 leading-tight"
            delay={0.1}
          />
          <br className="hidden md:block" />
          <AnimatedText 
            text="AI/ML & Software Engineer."
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#a3a3a3] leading-tight"
            delay={0.5}
          />
        </motion.div>

        <div className="mt-6 flex flex-col items-center justify-between gap-10 border-t border-[#222] pt-10 md:flex-row">
          <motion.p
            initial={false}
            animate={portfolioRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#888] max-w-2xl font-sans leading-relaxed font-light"
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            initial={false}
            animate={portfolioRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 shrink-0"
          >
            <MagneticButton variant="primary" href="#projects" onClick={(e) => scrollTo(e, 'projects')} className="rounded-full !font-medium !tracking-normal !px-8">
              View Work
            </MagneticButton>
            
            <div className="flex items-center gap-4">
              <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors p-4 border border-[#222] hover:border-[#444] bg-[#0a0a0a] rounded-full" aria-label="GitHub Profile">
                <GithubIcon size={20} />
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors p-4 border border-[#222] hover:border-[#444] bg-[#0a0a0a] rounded-full" aria-label="LinkedIn Profile">
                <LinkedinIcon size={20} />
              </Link>
              <Link href={siteConfig.leetcode} target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors p-4 border border-[#222] hover:border-[#444] bg-[#0a0a0a] rounded-full" aria-label="LeetCode Profile">
                <LeetcodeIcon size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
