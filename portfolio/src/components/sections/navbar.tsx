'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { navLinks } from '@/data/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioRevealed, setPortfolioRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const reveal = () => setPortfolioRevealed(true);
    if (document.documentElement.dataset.portfolioRevealed === 'true') reveal();
    window.addEventListener('portfolio:reveal', reveal);
    return () => window.removeEventListener('portfolio:reveal', reveal);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={portfolioRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-[#262626] py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link href="#home" aria-label="Tharun K V home" onClick={() => setIsOpen(false)} className="flex items-center gap-3 z-50 group">
          <Image src="/profile.png" alt="" width={40} height={40} className="rounded-full border border-white/20 object-cover transition-transform group-hover:scale-105" />
          <span className="font-semibold text-xl hidden md:block text-white tracking-tight">Tharun K V</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex items-center gap-5 text-sm font-medium tracking-wide xl:gap-7">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`relative py-2 transition-colors hover:text-white ${
                    activeSection === item.href.replace('#', '') ? 'text-white' : 'text-[#888]'
                  }`}
                  aria-current={activeSection === item.href.replace('#', '') ? 'location' : undefined}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <MagneticButton variant="primary" size="sm" href="mailto:tharunkv742004@gmail.com">
            Contact
          </MagneticButton>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-[#B8ACFF]/20 active:bg-[#B8ACFF]/30 hover:text-[#B8ACFF] active:text-[#B8ACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8ACFF] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
              animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              id="mobile-navigation"
              className="fixed inset-0 flex flex-col items-center justify-start gap-8 overflow-y-auto bg-[#050505] px-6 py-28 lg:hidden sm:justify-center"
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col items-center gap-5 text-2xl font-medium tracking-tight sm:gap-7 sm:text-3xl">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : i * 0.1, duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`hover:text-white transition-colors ${
                        activeSection === item.href.replace('#', '') ? 'text-white' : 'text-[#888]'
                      }`}
                      aria-current={activeSection === item.href.replace('#', '') ? 'location' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : navLinks.length * 0.1, duration: shouldReduceMotion ? 0 : 0.5 }}
              >
                <MagneticButton variant="primary" href="mailto:tharunkv742004@gmail.com" className="min-h-11">
                  Contact Me
                </MagneticButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
