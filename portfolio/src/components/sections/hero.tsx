'use client';

import React from 'react';
import Image from 'next/image';
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

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden z-10">
      <div className="container mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-4 sm:px-6 pb-16 pt-28 text-center z-10">

        <motion.div
          initial={false}
          animate={portfolioRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.08 }}
          className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border border-white/20 bg-[#111] shadow-[0_0_36px_rgba(94,234,212,0.12)] sm:h-28 sm:w-28"
        >
          <Image
            src="/profile.png"
            alt="Portrait of Tharun K V"
            fill
            priority
            sizes="112px"
            className="object-cover object-center"
          />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={portfolioRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(6px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 md:mb-12"
        >
          <span className="text-[#a3a3a3] font-medium tracking-wide text-sm md:text-base  bg-[#111] px-4 py-2 rounded-full border border-[#222]">
            AIML and SDE Engineer
          </span>
        </motion.div>

        {/* Apple-style animated hero typography */}
        <motion.div
          initial={false}
          animate={portfolioRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(8px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 md:mb-8"
        >
          <AnimatedText 
            text="Hello, I'm Tharun.K.V"
            as="h1"
            className="text-[clamp(2.45rem,9vw,3rem)] sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-2 leading-[1.08] [text-wrap:balance]"
            delay={0.1}
          />
          <br className="hidden md:block" />
          <AnimatedText 
            text="AI/ML & Software Engineer."
            as="h2"
            className="text-[clamp(2rem,7.5vw,2.6rem)] sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#a3a3a3] leading-[1.1] [text-wrap:balance]"
            delay={0.5}
          />
        </motion.div>

        <div className="mt-5 flex w-full flex-col items-center justify-between gap-7 border-t border-[#222] pt-7 sm:mt-6 sm:gap-10 sm:pt-10 md:flex-row">
          <motion.p
            initial={false}
            animate={portfolioRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-base font-sans font-light leading-relaxed text-[#a3a3a3] sm:text-lg md:text-xl"
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            initial={false}
            animate={portfolioRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full shrink-0 flex-col items-center gap-5 sm:w-auto sm:flex-row sm:gap-6"
          >
            <MagneticButton variant="primary" href="#projects" className="min-h-11 rounded-full !font-medium !tracking-normal !px-8">
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
