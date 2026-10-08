'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AnimatedText } from '@/components/ui/animated-text';
import { achievements } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 border-t border-[#111]">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading number="05" title="Achievements" subtitle="Highlights & Recognitions" align="left" />
        </ScrollReveal>

        <div className="mt-20 flex flex-col gap-12">
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
                        <a 
                          href={item.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#ccff00] hover:text-[#000] transition-colors bg-[#ccff00]/10 hover:bg-[#ccff00] px-5 py-2.5 rounded-full border border-[#ccff00]/20 hover:border-[#ccff00] w-fit"
                        >
                          View Official Certificate
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </a>
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
    </section>
  );
}