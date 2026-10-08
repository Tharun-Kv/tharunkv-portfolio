'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AnimatedText } from '@/components/ui/animated-text';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, Eye, X } from 'lucide-react';

type FilterType = 'All' | 'AI/GenAI' | 'Cloud' | 'Data' | 'Professional';

interface Cert {
  id: string;
  title: string;
  issuer: string;
  category: string;
  filterCat: FilterType[];
}

const featuredCerts: Cert[] = [
  { id: '1qBH6rJWZmbhDW1NTMfnMAUxTlbRJQuRV', title: 'Tata GenAI Certificate', issuer: 'TATA', category: 'AI / GENAI', filterCat: ['All', 'AI/GenAI'] },
  { id: '1D0y31_zV9OiUu3AximKdIUJl4Kwd1DEH', title: 'Tata GenAI Powered Data Analytics Certificate', issuer: 'TATA', category: 'AI / GENAI · DATA ANALYTICS', filterCat: ['All', 'AI/GenAI', 'Data'] },
  { id: '1ug9TPCkS96cPHS9iVPtKAWfbxBV_4X-k', title: 'AWS Course Completion Certificate', issuer: 'AWS', category: 'CLOUD / ENGINEERING', filterCat: ['All', 'Cloud'] },
  { id: '1eRtSQAmzRvv-Ro_7MfeEPHC8XER42C9U', title: 'Unstop Certificate of Excellence', issuer: 'UNSTOP', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1PGkUqUT5niSiyYXTAjF8Osa02-lgN8dA', title: 'Unstop Certificate of Participation', issuer: 'UNSTOP', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1liFtMTNZzE2egWZrQeoiVK2KZYWOAjkd', title: 'Tharun Coursera Certificate 1', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
];

const remainingCerts: Cert[] = [
  { id: '1JwjpbeAHrd1ER6Z8C0TfGhO89KkNegKm', title: 'Tharun Certificate', issuer: 'NOT SPECIFIED', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1YMt0ZRoyJ_JYZ4B9Fx_IvbrEUi8R_YZu', title: 'Tharun PPM Certificate', issuer: 'NOT SPECIFIED', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '13Pt4AMqe3kxvq73xVeXF5fPz9rthwVKw', title: 'Tharun Excel Part 3 Certificate', issuer: 'NOT SPECIFIED', category: 'DATA / ANALYTICS', filterCat: ['All', 'Data'] },
  { id: '1KTU_I35j79SpgGnWWiwGax0Q1gCij0HV', title: 'Tharun Excel Part 2 Certificate', issuer: 'NOT SPECIFIED', category: 'DATA / ANALYTICS', filterCat: ['All', 'Data'] },
  { id: '1c8PyIjMXc9WuLLmc5ySPGhPrIOP2FvS2', title: 'Tharun Excel Certificate', issuer: 'NOT SPECIFIED', category: 'DATA / ANALYTICS', filterCat: ['All', 'Data'] },
  { id: '12O50ZF-iJ-Cc8D1O4zA13upOqha6TWCT', title: 'Tharun Coursera Email Certificate', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1uGz1Trqtr2flrDO3GsUYh12v-jUNPYUU', title: 'Certificate — Screenshot 2025-06-14', issuer: 'NOT SPECIFIED', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '11kFunnAKTsZcqYOQAHIep2iZ6gxhXVKE', title: 'T20250720651 — Tharun K V', issuer: 'NOT SPECIFIED', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1fLVbKxGULiJNfTcNLjQyEFJt1xkH-DJa', title: 'Maths Coursera Certificate', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1u09VOOsAIjM49obzQMBHrDolaeHdhSBP', title: 'Techverve Internship Completion Certificate', issuer: 'TECHVERVE SOLUTIONS', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1S8bF9L8aw2fv736e7_QhiUnDrap99AQx', title: 'Coursera TBV6CB8NJBYF', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1oQ1MKx7mJtyQf90htrjjizcqfeOeSiko', title: 'Emotion Intelligence — Tharun Certificate', issuer: 'NOT SPECIFIED', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1OnzsEEP4qAlVja88Iuz-_wL1iQiMgU72', title: 'Coursera TBV6CB8NJBYF-1', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1yuObWsLihOVO8XU4zGQMhWUms-wtBRL1', title: 'Coursera EU87UO6PMUR1', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1C6qIvDT9qsjN_h82ekrsR5sM9VtSo7ZR', title: 'Coursera QVJBNFXECTTF', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1EhUlN-D49ZNeOzSw6EOBlHKdajRD6DS3', title: 'Coursera 6QF5JBCI788T', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '1rM8AMttltBULeTZ_V1Q3onMNxzETTzuq', title: 'Coursera 7XFYIO9QX4KN', issuer: 'COURSERA', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
  { id: '12r6y5OlhPD6AveQlTXzVmBLrloVSy_5H', title: 'C1 Certificate', issuer: 'NOT SPECIFIED', category: 'PROFESSIONAL / LEARNING', filterCat: ['All', 'Professional'] },
];

const filters: FilterType[] = ['All', 'AI/GenAI', 'Data', 'Cloud', 'Professional'];

function IssuerLogo({ issuer }: { issuer: string }) {
  switch (issuer) {
    case 'TATA':
      return <Image src="https://upload.wikimedia.org/wikipedia/commons/8/86/Tata_logo.svg" alt="Tata" width={24} height={24} unoptimized className="h-6 w-6 object-contain brightness-0 invert opacity-90" />;
    case 'AWS':
      return <Image src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width={28} height={28} unoptimized className="h-7 w-7 object-contain brightness-0 invert opacity-90" />;
    case 'COURSERA':
      return <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg" alt="Coursera" width={24} height={24} unoptimized className="h-6 w-6 object-contain brightness-0 invert opacity-90" />;
    case 'UNSTOP':
      return <span className="font-bold text-[10px] tracking-tighter text-white opacity-90 italic">unstop</span>;
    default:
      return <Award size={18} className="text-white opacity-90" strokeWidth={1.5} />;
  }
}

function CertificateCard({ cert, index, onOpen }: { cert: Cert; index: number; onOpen: (cert: Cert) => void }) {
  const [previewError, setPreviewError] = useState(false);
  const previewUrl = `https://drive.google.com/thumbnail?id=${cert.id}&sz=w800`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        type="button"
        onClick={() => onOpen(cert)}
        aria-label={`View ${cert.title} from ${cert.issuer}`}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#222] bg-[#080808] text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ccff00]"
      >
        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Certificate Preview */}
        <div className="relative aspect-[16/10] bg-[#111] border-b border-[#222] overflow-hidden">
          
          {/* Brand Logo Glass Badge */}
          <div className="absolute top-4 right-4 z-20 w-11 h-11 bg-[#000000]/60 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <IssuerLogo issuer={cert.issuer} />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full h-full relative z-10"
          >
            {!previewError ? (
              <Image 
                src={previewUrl}
                alt={`${cert.title} Preview`}
                fill
                unoptimized
                onError={() => setPreviewError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                <Award size={48} strokeWidth={1} />
                <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#888]">{cert.issuer}</span>
                <span className="mt-2 max-w-sm text-sm font-medium leading-snug text-white">{cert.title}</span>
                <span className="mt-3 text-[10px] font-mono uppercase tracking-widest text-[#666]">Certificate preview</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="p-8 flex flex-col flex-1 relative z-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888] mb-4 flex items-center gap-2">
            {cert.issuer}
          </span>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-6 leading-tight">
            {cert.title}
          </h3>
          
          <div className="mt-auto pt-6 flex flex-col gap-6 border-t border-[#222]/50">
            <span className="inline-flex self-start px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-[10px] font-bold tracking-widest text-[#aaa] uppercase">
              {cert.category}
            </span>
            
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-white group-hover:text-[#ccff00] transition-colors">
              <Eye size={16} className="transition-transform group-hover:scale-110" />
              View Certificate
            </div>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  useEffect(() => {
    if (!selectedCert) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCert(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const allCerts = [...featuredCerts, ...remainingCerts];
  
  // Logic:
  // If Filter is "All" AND showAll is false -> show only featuredCerts
  // Otherwise -> show all certs that match the filter
  const visibleCerts = (activeFilter === 'All' && !showAll)
    ? featuredCerts
    : allCerts.filter(c => c.filterCat.includes(activeFilter));

  return (
    <section id="certifications" className="py-32 relative z-10 border-t border-[#111]/30">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <ScrollReveal>
            <div className="flex flex-col items-start mb-6">
              <span className="text-[#ccff00] font-mono text-sm tracking-widest mb-4">06</span>
              <div className="overflow-hidden">
                <AnimatedText 
                  text="Certifications & Credentials"
                  as="h2"
                  className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-[#888] font-light text-lg md:text-xl max-w-2xl leading-relaxed">
              Continuous learning through industry certifications, technical courses, and professional programs.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => {
                  setActiveFilter(filter);
                  if (filter !== 'All') setShowAll(true);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-[#111] text-[#888] border border-[#222] hover:border-[#555] hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleCerts.map((cert, i) => (
              <CertificateCard key={`${cert.id}-${activeFilter}`} cert={cert} index={i} onOpen={setSelectedCert} />
            ))}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Button */}
        {activeFilter === 'All' && (
          <ScrollReveal delay={0.4} direction="up">
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] border border-[#333] hover:border-[#ccff00] hover:bg-[#111] text-[#e5e5e5] hover:text-[#ccff00] rounded-full text-sm font-medium tracking-wide transition-all duration-300"
              >
                {showAll ? 'Show Featured Only' : 'View All Certifications'}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-500 ${showAll ? 'rotate-180' : ''} group-hover:translate-y-0.5`} 
                />
              </button>
            </div>
          </ScrollReveal>
        )}

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="certificate-viewer-title"
                className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#333] bg-[#080808]"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.99 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-4 border-b border-[#222] px-5 py-4 md:px-7">
                  <div className="min-w-0">
                    <h3 id="certificate-viewer-title" className="truncate text-base font-semibold text-white md:text-lg">{selectedCert.title}</h3>
                    <p className="mt-1 text-sm text-[#888]">{selectedCert.issuer} <span className="px-1 text-[#555]">·</span> {selectedCert.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate viewer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#333] text-[#aaa] transition-colors hover:border-[#555] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ccff00]"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="min-h-0 flex-1 bg-[#111]">
                  <iframe
                    key={selectedCert.id}
                    title={`${selectedCert.title} certificate`}
                    src={`https://drive.google.com/file/d/${selectedCert.id}/preview`}
                    className="h-full min-h-[60vh] w-full md:min-h-[70vh]"
                    allow="autoplay"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}