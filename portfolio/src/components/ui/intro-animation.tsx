'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sacramento } from 'next/font/google';

const cursiveFont = Sacramento({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const greetings = [
  "hello",
  "ನಮಸ್ಕಾರ",
  "नमस्ते",
  "నమస్కారం",
  "வணக்கம்",
  "안녕하세요"
];

type IntroStage = 'greetings' | 'welcome' | 'opening';

function AnimatedWelcomeLine({ text, startDelay = 0, className = '' }: { text: string; startDelay?: number; className?: string }) {
  return (
    <span aria-label={text} className={className}>
      {text.split('').map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, delay: startDelay + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {character === ' ' ? '\u00a0' : character}
        </motion.span>
      ))}
    </span>
  );
}

export function IntroAnimation() {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<IntroStage>('greetings');
  const [showIntro, setShowIntro] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const revealPortfolio = () => {
      document.documentElement.dataset.portfolioRevealed = 'true';
      window.dispatchEvent(new Event('portfolio:reveal'));
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setShowIntro(false);
      revealPortfolio();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    const timers: number[] = [];
    const schedule = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(callback, delay));
    };

    const advanceGreeting = (currentIndex: number) => {
      schedule(() => {
        if (currentIndex < greetings.length - 1) {
          const nextIndex = currentIndex + 1;
          setIndex(nextIndex);
          advanceGreeting(nextIndex);
          return;
        }

        setStage('welcome');
        schedule(() => {
          setStage('opening');
          revealPortfolio();
          schedule(() => {
            setShowIntro(false);
            document.body.style.overflow = previousOverflow;
          }, 1050);
        }, 6200);
      }, currentIndex === 0 ? 1550 : 820);
    };

    advanceGreeting(0);
    return () => {
      timers.forEach(window.clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const greetingVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
        staggerChildren: 0.12,
        delayChildren: 0.08,
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.22, ease: "easeInOut" as const }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const exactAppleFont = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif";

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: shouldReduceMotion ? 0 : 0.25 } }}
          aria-label="Portfolio introduction"
        >
          <motion.div
            className="absolute inset-y-0 left-0 z-10 w-1/2 bg-[#050505]"
            initial={false}
            animate={{ x: stage === 'opening' ? '-100vw' : 0 }}
            transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 z-10 w-1/2 bg-[#050505]"
            initial={false}
            animate={{ x: stage === 'opening' ? '100vw' : 0 }}
            transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: 'transform' }}
          />

          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
            animate={{ opacity: stage === 'opening' ? 0 : 1, scale: stage === 'opening' ? 0.985 : 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: exactAppleFont, WebkitFontSmoothing: 'antialiased' }}
          >
            <AnimatePresence mode="wait">
              {stage === 'greetings' && (
                <motion.div
                  key={`greeting-${index}`}
                  variants={greetingVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`text-white ${index === 0 ? `flex text-[7.5rem] md:text-[12rem] lg:text-[14rem] ${cursiveFont.className}` : 'text-6xl font-medium md:text-8xl lg:text-[7rem]'}`}
                  style={{ fontFamily: index === 0 ? undefined : exactAppleFont }}
                >
                  {index === 0
                    ? greetings[index].split('').map((letter, letterIndex) => (
                      <motion.span key={letterIndex} variants={letterVariants}>{letter}</motion.span>
                    ))
                    : greetings[index]}
                </motion.div>
              )}

              {(stage === 'welcome' || stage === 'opening') && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: stage === 'opening' ? 0 : 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex max-w-5xl flex-col items-center"
                >
                  <h1 className="flex flex-col items-center font-light tracking-tight text-white">
                    <AnimatedWelcomeLine text="Welcome to" className="mb-3 text-2xl text-[#aaa] sm:text-3xl md:mb-5 md:text-5xl lg:text-6xl" />
                    <AnimatedWelcomeLine text="Tharun's" startDelay={1.5} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl" />
                    <AnimatedWelcomeLine text="Portfolio" startDelay={2.85} className="mt-5 text-2xl tracking-wide text-[#a3a3a3] sm:text-3xl md:mt-7 md:text-5xl lg:text-6xl" />
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
