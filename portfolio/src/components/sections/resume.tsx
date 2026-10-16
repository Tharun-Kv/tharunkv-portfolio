import { Download } from 'lucide-react';
import ResumeViewerButton from '@/components/ui/resume-viewer';

const resumeUrl = '/Tharun-KV-Resume.pdf';

export default function Resume() {
  return (
    <section id="resume" className="section-space border-t border-[#111]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 block font-mono text-sm tracking-widest text-[#5EEAD4]">07</span>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Resume</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#999] sm:text-lg">
              View my experience, education, skills, and qualifications.
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
      </div>
    </section>
  );
}
