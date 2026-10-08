import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/ui/icons';
import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-[#111]">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-semibold text-lg tracking-tight text-white">{siteConfig.name}</span>
          <p className="text-[#666] font-medium text-xs tracking-wide">
            © {currentYear} All Rights Reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={siteConfig.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#888] hover:text-white transition-colors p-3 bg-[#111] rounded-full hover:bg-[#222]"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a 
            href={siteConfig.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#888] hover:text-white transition-colors p-3 bg-[#111] rounded-full hover:bg-[#222]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-white transition-colors p-3 bg-[#111] rounded-full hover:bg-[#222]"
            aria-label="LeetCode"
          >
            <LeetcodeIcon className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${siteConfig.email}`} 
            className="text-[#888] hover:text-white transition-colors p-3 bg-[#111] rounded-full hover:bg-[#222]"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
