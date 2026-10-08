'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { TechBadge } from '@/components/ui/tech-badge';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 border-t border-[#111]/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading number="03" title="Projects" subtitle="Engineering & Research" align="left" />
        </ScrollReveal>

        <div className="mt-24 grid grid-cols-1 gap-16 md:gap-24">
          {projects.map((project) => (
            <ScrollReveal key={project.id} delay={0.1}>
              <div className="group relative border border-[#222] bg-[#0a0a0a] rounded-3xl overflow-hidden hover:border-[#444] transition-colors duration-500">
                <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12">
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-8">
                        {project.category.map(cat => (
                          <span key={cat} className="text-xs font-medium text-[#000000] bg-white px-3 py-1 rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white mb-6 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-lg md:text-xl font-sans text-[#e5e5e5] font-medium mb-6">
                        {project.description}
                      </p>
                      
                      <p className="text-base text-[#888] leading-relaxed max-w-3xl mb-12 font-light">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                      
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium tracking-wide text-white hover:text-[#ccff00] transition-colors bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#333] hover:border-[#ccff00]"
                        >
                          View Source
                        </a>
                      )}
                    </div>
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
