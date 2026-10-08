'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { TechCard } from '@/components/ui/tech-card';
import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 border-t border-[#111]/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading number="04" title="Technical Domain Proficiencies" subtitle="Capabilities & Tools" align="left" />
        </ScrollReveal>

        <div className="mt-16">
          <div className="flex flex-col gap-16 md:gap-24">
            {skills.map((category, index) => (
              <ScrollReveal key={category.category} delay={index * 0.1} direction="up">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                  <div className="lg:w-1/4 pt-2">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {category.skills.map(skill => (
                      <TechCard 
                        key={skill} 
                        name={skill} 
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
