import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import ResumeViewerButton from '@/components/ui/resume-viewer';

const resumeUrl = '/Tharun-KV-Resume.pdf';

export const metadata: Metadata = {
  title: 'Resume | Tharun K V',
  description: 'View and download Tharun K V’s resume.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 pb-10 pt-6 text-[#e5e5e5] sm:px-6 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4 border-b border-[#222] pb-5">
          <Link href="/" aria-label="Back to Tharun K V’s portfolio" className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8ACFF]">
            <Image src="/profile.png" alt="" width={40} height={40} className="rounded-full border border-white/20 object-cover" />
            <span className="font-semibold tracking-tight text-white">Tharun K V</span>
          </Link>
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#333] px-4 text-sm text-[#bbb] transition-colors hover:border-[#777] hover:text-white">
            <ArrowLeft size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Back to portfolio</span>
            <span className="sm:hidden">Portfolio</span>
          </Link>
        </header>

        <section className="py-10 sm:py-14" aria-labelledby="resume-title">
          <div className="mb-6 flex flex-col gap-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#5EEAD4]">Profile document</p>
              <h1 id="resume-title" className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">My Resume</h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#999] sm:text-base">
                View my experience, education, skills, and qualifications below.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={resumeUrl}
                download="Tharun-KV-Resume.pdf"
                className="resume-download-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5EEAD4] px-6 font-semibold text-black transition-colors hover:bg-[#B8ACFF] hover:text-black active:bg-[#B8ACFF] active:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8ACFF]"
              >
                <Download className="resume-download-icon" size={18} aria-hidden="true" />
                Download Resume
              </a>
              <ResumeViewerButton />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
