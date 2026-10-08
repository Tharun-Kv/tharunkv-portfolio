'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AnimatedText } from '@/components/ui/animated-text';
import { TechBadge } from '@/components/ui/tech-badge';
import { experiences } from '@/data/portfolio';

const TechBullet = () => (
  <div className="relative mt-[6px] w-3.5 h-3.5 shrink-0 flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="absolute inset-0 text-[#ccff00] opacity-80"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      className="absolute inset-0 text-[#ccff00] opacity-30 animate-[spin_4s_linear_infinite]"
    >
      <circle cx="12" cy="12" r="11" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10 border-t border-[#111]/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading number="02" title="Experience" subtitle="Where I've applied my skills" align="left" />
        </ScrollReveal>

        <div className="mt-20 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={0.1} direction="up">
              <div className="relative group p-8 md:p-12 border border-[#222] bg-[#0a0a0a] rounded-3xl hover:border-[#444] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-start gap-6 mb-8 pb-8 border-b border-[#222] group-hover:border-[#444] transition-colors">
                  <div>
                    <div className="overflow-hidden mb-2">
                      <AnimatedText 
                        text={exp.company}
                        as="h3"
                        className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight uppercase"
                      />
                    </div>
                    <ScrollReveal delay={0.2} direction="up">
                      <p className="text-xl font-medium text-[#a3a3a3] tracking-tight">{exp.title}</p>
                    </ScrollReveal>
                  </div>
                  
                  <ScrollReveal delay={0.3} direction="up">
                    <div className="flex flex-col lg:items-end text-[#888] font-medium text-sm gap-3 pt-2">
                      <span className="bg-[#111] px-4 py-1.5 rounded-full border border-[#333] text-[#e5e5e5] tracking-wide">{exp.duration}</span>
                      <span className="px-2 tracking-wide uppercase text-xs">{exp.location}</span>
                    </div>
                  </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                  <div className="lg:col-span-12">
                    <ul className="space-y-5">
                      {exp.description.map((point, i) => (
                        <ScrollReveal key={i} delay={0.3 + i * 0.1} direction="up">
                          <li className="text-[#a3a3a3] text-base md:text-lg leading-relaxed flex items-start gap-4 font-light">
                            <TechBullet />
                            <span>{point}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                    
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-[#222]">
                        {exp.techStack.map((tech, i) => (
                          <ScrollReveal key={tech} delay={0.5 + i * 0.05} direction="up">
                            <TechBadge name={tech} />
                          </ScrollReveal>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
