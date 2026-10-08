'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiFastapi, SiGooglegemini, 
  SiNextdotjs, SiReact, SiAlpinedotjs, SiJinja, SiThreedotjs, SiChartdotjs, 
  SiPostgresql, SiSanity, SiGit, SiJsonwebtokens
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { VscDatabase, VscSparkle } from 'react-icons/vsc';

// Custom image icon for officially supported logos missing from the older react-icons bundle
const CdnIcon = ({ slug, title }: { slug: string, title: string }) => (
  <img 
    src={`https://cdn.simpleicons.org/${slug}/white`} 
    alt={`${title} logo`} 
    className="w-full h-full object-contain"
    aria-hidden="true"
  />
);

export function getSkillIcon(skillName: string) {
  const s = skillName.toLowerCase();
  
  if (s.includes('python')) return <SiPython />;
  if (s.includes('javascript')) return <SiJavascript />;
  if (s.includes('typescript')) return <SiTypescript />;
  if (s.includes('java') && !s.includes('javascript')) return <FaJava />;
  if (s.includes('fastapi')) return <SiFastapi />;
  if (s.includes('gemini')) return <SiGooglegemini />;
  if (s.includes('openai')) return <CdnIcon slug="openai" title="OpenAI" />;
  if (s.includes('whisper')) return <CdnIcon slug="openai" title="Whisper" />;
  if (s.includes('llm') || s.includes('prompt')) return <VscSparkle />;
  if (s.includes('next.js')) return <SiNextdotjs />;
  if (s.includes('react')) return <SiReact />;
  if (s.includes('alpine')) return <SiAlpinedotjs />;
  if (s.includes('jinja')) return <SiJinja />;
  if (s.includes('three')) return <SiThreedotjs />;
  if (s.includes('chart')) return <SiChartdotjs />;
  if (s.includes('postgre')) return <SiPostgresql />;
  if (s.includes('sanity')) return <SiSanity />;
  if (s.includes('alembic')) return <VscDatabase />;
  if (s.includes('aws')) return <FaAws />;
  if (s.includes('s3') || s.includes('cloudfront')) return <FaAws />;
  if (s.includes('git') && !s.includes('github')) return <SiGit />;
  if (s.includes('oauth') || s.includes('jwt')) return <SiJsonwebtokens />;
  if (s.includes('rake') || s.includes('tts')) return <VscSparkle />;
  
  return null;
}

interface TechCardProps {
  name: string;
}

export function TechCard({ name }: TechCardProps) {
  const icon = getSkillIcon(name);

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="group relative flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-[#0a0a0a] border border-[#222] hover:border-[#444] transition-colors duration-500 overflow-hidden cursor-default"
    >
      {/* Subtle background glow on hover */}
      <motion.div 
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-white/[0.02] z-0"
      />

      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.08 }
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#e5e5e5]"
      >
        <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          {icon}
        </div>
      </motion.div>
      
      <span className="relative z-10 font-medium tracking-tight text-[#a3a3a3] group-hover:text-white transition-colors duration-500 text-base md:text-lg">
        {name}
      </span>
    </motion.div>
  );
}
