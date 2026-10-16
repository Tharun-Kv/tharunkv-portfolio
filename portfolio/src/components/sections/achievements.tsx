'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AnimatedText } from '@/components/ui/animated-text';
import { achievements } from '@/data/portfolio';
import { Eye } from 'lucide-react';

export default function Achievements() {
  const [certificate, setCertificate] = useState<{ title: string; src: string } | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!certificate) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCertificate(null);
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      openerRef.current?.focus();
    };
  }, [certificate]);

  return (
    <section id="achievements" className="section-space border-t border-[#111]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading number="05" title="Achievements" subtitle="Highlights & Recognitions" align="left" />
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-8 sm:mt-16 md:mt-20 md:gap-12">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15} direction="up">
              <div className="group relative flex flex-col md:flex-row gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-[#444] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                
                {/* Background Subtle Hover */}
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex-shrink-0">
                  <span className="text-sm md:text-base font-mono font-medium tracking-widest text-[#555] group-hover:text-[#888] transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row gap-10">
                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                      <div>
                        <div className="overflow-hidden mb-2">
                          <AnimatedText 
                            text={item.title} 
                            as="h3" 
                            className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight" 
                          />
                        </div>
                        <p className="text-[#a3a3a3] font-medium tracking-wide text-lg">
                          {item.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#111] border border-[#333] text-xs font-semibold tracking-widest text-[#e5e5e5]">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#888] font-light leading-relaxed text-base md:text-lg max-w-3xl mb-8">
                      {item.description}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-[#222]">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex flex-col gap-1">
                            <span className="text-xs font-medium tracking-widest text-[#555] uppercase">
                              {detail.label}
                            </span>
                            <span className="text-sm font-medium tracking-wide text-[#e5e5e5]">
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {item.certificateLink && (
                      <div className="mt-8 pt-2">
                        <button
                          type="button"
                          onClick={(event) => {
                            const certificateSrc = item.certificateLink;
                            if (!certificateSrc) return;
                            openerRef.current = event.currentTarget;
                            setCertificate({
                              title: item.title,
                              src: certificateSrc,
                            });
                          }}
                          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#5EEAD4] hover:text-[#000] active:text-[#000] transition-colors bg-[#5EEAD4]/10 hover:bg-[#B8ACFF] active:bg-[#B8ACFF] px-5 py-2.5 rounded-full border border-[#5EEAD4]/20 hover:border-[#B8ACFF] active:border-[#B8ACFF] w-fit"
                        >
                          View Official Certificate
                          <Eye className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>

                  {item.image && (
                    <div className="w-full lg:w-64 xl:w-80 shrink-0 flex flex-col justify-center">
                      <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#222] bg-[#000] group/img">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className="object-cover object-center scale-105 transition-transform duration-700 ease-in-out group-hover/img:scale-100"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {certificate && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setCertificate(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-certificate-title"
            className="flex max-h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#333] bg-[#080808]"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#222] px-4 py-3 sm:px-6 sm:py-4">
              <h3 id="achievement-certificate-title" className="min-w-0 truncate text-sm font-semibold text-white sm:text-base">
                {certificate.title} — Certificate
              </h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setCertificate(null)}
                aria-label="Close certificate"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#333] text-white hover:border-[#777] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8ACFF]"
              >
                <span aria-hidden="true" className="text-2xl leading-none">×</span>
              </button>
            </header>
            <div className="relative min-h-0 w-full flex-1 bg-[#111]">
              <div className="relative mx-auto h-[min(74dvh,60rem)] w-full">
                <Image
                  src={certificate.src}
                  alt={`${certificate.title} certificate awarded to Tharun K V`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
