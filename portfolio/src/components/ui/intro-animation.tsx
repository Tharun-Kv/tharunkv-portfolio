'use client';

import { Fragment, useState, useEffect } from 'react';
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

type IntroStage = 'greetings' | 'bot' | 'opening';

function AnimatedWelcomeLine({
  text,
  reducedMotion,
  delay = 0,
  className,
}: {
  text: string;
  reducedMotion: boolean;
  delay?: number;
  className: string;
}) {
  const words = text.split(' ');
  const cardDelay = reducedMotion ? 0 : 1.35;

  return (
    <p aria-label={text} className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            initial={reducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: reducedMotion ? 0 : cardDelay + delay + index * 0.075,
              duration: reducedMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </p>
  );
}

function WelcomeBot({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '70vw', y: 90, scale: 0.35, rotate: 24 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
        scale: [0.35, 1.12, 1],
        rotate: [24, -8, 4, 0],
      }}
      exit={reducedMotion ? { opacity: 0 } : {
        opacity: [1, 1, 0],
        x: [0, 0, 0],
        y: [0, 14, 22],
        scale: [1, 0.88, 0.08],
        rotate: [0, -8, 18],
        filter: ['blur(0px)', 'blur(0px)', 'blur(2px)'],
      }}
      transition={reducedMotion ? { duration: 0.25 } : {
        x: { duration: 1.35, ease: [0.3, 0, 0.75, 0.2] },
        y: { duration: 1.35, ease: [0.3, 0, 0.75, 0.2] },
        scale: { duration: 1.35, ease: [0.3, 0, 0.75, 0.2] },
        rotate: { duration: 1.35, ease: [0.3, 0, 0.75, 0.2] },
        filter: { duration: 1.35, ease: [0.3, 0, 0.75, 0.2] },
        opacity: { duration: 1.25, ease: [0.3, 0, 0.75, 0.2] },
      }}
      className="flex w-full max-w-5xl flex-col items-center justify-center gap-5 px-2 sm:px-6 md:flex-row md:gap-10"
      aria-label="Animated welcome robot"
    >
      <motion.svg
        viewBox="0 0 180 160"
        role="img"
        aria-label="A friendly animated robot"
        className="h-36 w-40 shrink-0 drop-shadow-[0_0_28px_rgba(94,234,212,0.22)] sm:h-48 sm:w-52"
        animate={reducedMotion ? undefined : { rotate: [-3, 3, -3], y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M90 18v17" stroke="#5EEAD4" strokeWidth="5" strokeLinecap="round" />
        <circle cx="90" cy="13" r="7" fill="#5EEAD4" />
        <rect x="29" y="42" width="122" height="84" rx="28" fill="#101010" stroke="#5EEAD4" strokeWidth="4" />
        <rect x="42" y="55" width="96" height="48" rx="17" fill="#1a1a1a" />
        <circle cx="68" cy="78" r="7" fill="#5EEAD4" />
        <circle cx="112" cy="78" r="7" fill="#5EEAD4" />
        <path d="M72 91c5 6 11 9 18 9s13-3 18-9" stroke="#f5f5f5" strokeWidth="4" strokeLinecap="round" />
        <rect x="17" y="66" width="12" height="34" rx="6" fill="#5EEAD4" />
        <rect x="151" y="66" width="12" height="34" rx="6" fill="#5EEAD4" />
        <rect x="53" y="132" width="74" height="18" rx="9" fill="#1a1a1a" stroke="#555" strokeWidth="3" />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: reducedMotion ? 0 : 1.35, duration: reducedMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl rounded-3xl border border-[#5EEAD4]/35 bg-[#101010]/95 px-6 py-6 text-left shadow-[0_18px_70px_rgba(0,0,0,0.45)] sm:px-10 sm:py-8"
      >
        <span className="mb-3 block font-mono text-xs tracking-[0.24em] text-[#5EEAD4]">JEO · THARUN&apos;S AI ASSISTANT</span>
        <AnimatedWelcomeLine
          text="Hi, I’m Jeo, Tharun’s AI assistant."
          reducedMotion={reducedMotion}
          className="text-[clamp(2.25rem,7vw,4.5rem)] font-light leading-[0.98] tracking-tight text-white"
        />
        <AnimatedWelcomeLine
          text="Welcome to Tharun K V’s Portfolio."
          reducedMotion={reducedMotion}
          delay={0.8}
          className="mt-3 text-[clamp(2.25rem,7vw,4.5rem)] font-light leading-[0.98] tracking-tight text-white"
        />
        <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#5EEAD4]/35 bg-[#101010] md:left-0 md:bottom-auto md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:border-b-0 md:border-r md:border-t md:border-[#5EEAD4]/35" />
      </motion.div>
    </motion.div>
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

        setStage('bot');
        schedule(() => {
          setStage('opening');
          revealPortfolio();
          schedule(() => {
            setShowIntro(false);
            document.body.style.overflow = previousOverflow;
          }, 2000);
        }, 5000);
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
      {showIntro && !shouldReduceMotion && (
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
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 z-10 w-1/2 bg-[#050505]"
            initial={false}
            animate={{ x: stage === 'opening' ? '100vw' : 0 }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: 'transform' }}
          />

          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
            animate={{ opacity: stage === 'opening' ? 0 : 1, scale: stage === 'opening' ? 0.985 : 1 }}
            transition={{ duration: stage === 'opening' ? 1.35 : 0.35, ease: [0.16, 1, 0.3, 1] }}
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

              {stage === 'bot' && <WelcomeBot key="bot" reducedMotion={shouldReduceMotion ?? false} />}

            </AnimatePresence>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
