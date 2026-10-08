'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AnimatedText } from '@/components/ui/animated-text';
import { education } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 border-t border-[#111]/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading number="01" title="About Me" subtitle="Who I am & What I build" align="left" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          <div className="lg:col-span-7">
            <AnimatedText 
              text="        I build AI-powered applications and robust full-stack systems."
              as="h3"
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-tight"
            />
            
            <ScrollReveal delay={0.4} direction="up">
              <div className="space-y-6 text-[#a3a3a3] text-lg font-sans leading-relaxed font-light">
                <p>
                  I&apos;m a <strong className="font-medium text-white">final-year B.Tech Computer Science &amp; Engineering student specializing in AI &amp; ML</strong>, with hands-on experience building applications across <strong className="font-medium text-white">Generative AI, RAG, computer vision, backend systems, and modern web development</strong>.
                </p>
                <p>
                  During my experience at <strong className="font-medium text-white">Dview</strong>, I worked on enterprise frontend development using <strong className="font-medium text-white">Next.js, TypeScript, Tailwind CSS, and React</strong>, while also exploring AI-powered integrations and automation workflows.
                </p>
                <p>
                  I&apos;ve built practical AI systems using technologies such as <strong className="font-medium text-white">Python, FastAPI, Google Gemini, LangChain, ChromaDB, Neo4j, and computer vision frameworks</strong>, including an AI-powered UFDR analysis system selected for the <strong className="font-medium text-white">Smart India Hackathon National Finale</strong>.
                </p>
                <p>
                  I&apos;m particularly interested in bridging the gap between <strong className="font-medium text-white">AI models and scalable software infrastructure</strong>, building intelligent products that are <strong className="font-medium text-white">reliable, useful, and production-ready</strong>.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.5} direction="up">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[#222] bg-[#0a0a0a] group">
                <Image 
                  src="/profile.png" 
                  alt="Tharun K V" 
                  fill 
                  className="object-cover object-center scale-105 transition-transform duration-700 ease-in-out group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.2} direction="up" className="mt-16">
          <div className="w-full rounded-3xl border border-[#222] bg-[#0a0a0a] p-8 md:p-10">
            <h4 className="mb-8 border-b border-[#222] pb-4 font-sans text-2xl font-semibold tracking-tight text-white">Education</h4>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative border-l border-[#333] pl-6">
                  <div className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full bg-[#777]" />
                  <p className="mb-2 font-mono text-xs tracking-widest text-[#666]">0{index + 1}</p>
                  <h5 className="mb-2 text-lg font-medium text-white">{edu.degree}</h5>
                  <p className="mb-3 text-sm font-medium text-[#888]">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#666]">
                    <span>{edu.duration}</span>
                    <span className="h-1 w-1 rounded-full bg-[#444]" />
                    <span>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
