'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/ui/icons';
import { AnimatedText } from '@/components/ui/animated-text';
import { siteConfig } from '@/data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-[#111]/30">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#888] text-sm md:text-base font-medium tracking-widest">
                07
              </span>
              <div className="h-[1px] w-8 bg-[#333]" />
            </div>
            
            <div className="overflow-hidden">
              <AnimatedText 
                text="Let's Connect"
                as="h2"
                className="text-6xl md:text-8xl lg:text-[9rem] font-semibold tracking-tight leading-tight"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto text-center space-y-12 mt-12">
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-3xl font-light tracking-tight text-[#a3a3a3]">
              Ready to build robust AI systems & scalable software?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <MagneticButton 
                href={`mailto:${email}`} 
                variant="primary" 
                className="!bg-white !text-black hover:!bg-[#e5e5e5] !border-none"
                icon={<Mail className="w-5 h-5" />}
                size="lg"
              >
                Drop a Message
              </MagneticButton>
              
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton 
                  href={siteConfig.linkedin} 
                  variant="secondary" 
                  external
                  className="!border-[#333] !text-[#e5e5e5] hover:!bg-[#111] hover:!text-white"
                  icon={<LinkedinIcon className="w-5 h-5" />}
                >
                  LinkedIn
                </MagneticButton>

                <MagneticButton 
                  href={siteConfig.github} 
                  variant="secondary" 
                  external
                  className="!border-[#333] !text-[#e5e5e5] hover:!bg-[#111] hover:!text-white"
                  icon={<GithubIcon className="w-5 h-5" />}
                >
                  GitHub
                </MagneticButton>

                <MagneticButton
                  href={siteConfig.leetcode}
                  variant="secondary"
                  external
                  className="!border-[#333] !text-[#e5e5e5] hover:!bg-[#111] hover:!text-white"
                  icon={<LeetcodeIcon className="w-5 h-5" />}
                >
                  LeetCode
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-24 grid grid-cols-1 gap-8 border-t border-[#111] pt-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
                {[
                  { label: 'Based in', lines: siteConfig.locationDisplay },
                  { label: 'Native Place', lines: siteConfig.nativeLocationDisplay },
                ].map((address) => (
                  <div key={address.label} className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#666]" />
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#666]">{address.label}</p>
                      <address className="not-italic text-sm font-medium leading-relaxed text-[#888] md:text-base">
                        {address.lines.map((line) => <span key={line} className="block">{line}</span>)}
                      </address>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col items-start gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm font-medium text-[#888] transition-colors hover:text-white md:text-base"
                  aria-label={`Call ${siteConfig.phone}`}
                >
                  <Phone className="h-4 w-4 text-[#666]" />
                  <span>{siteConfig.phone}</span>
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-4 text-left text-sm font-medium tracking-wide text-[#888] transition-colors hover:text-white md:text-base"
                >
                  <div className="rounded-full border border-[#333] bg-[#111] p-2 group-hover:border-[#555]">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </div>
                  <span>{email}</span>
                  {copied && <span className="ml-2 rounded-full bg-white px-2 py-1 text-xs text-black">Copied</span>}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
