import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

const resumeUrl = '/Tharun-KV-Resume.pdf';
const resumePreviewUrl = 'https://drive.google.com/file/d/1ZEOu35ayfXo6Cq0M8cNTqn-qxB39IqHl/preview';

export const metadata: Metadata = {
  title: 'Resume PDF | Tharun K V',
  description: 'View Tharun K V’s resume in the browser.',
};

export default function ResumePdfPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-[#e5e5e5]">
      <header className="flex min-h-16 items-center justify-between gap-4 border-b border-[#222] px-4 sm:px-6">
        <Link
          href="/resume"
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-[#ccc] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8ACFF]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to resume
        </Link>
        <a
          href={resumeUrl}
          download="Tharun-KV-Resume.pdf"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#5EEAD4] px-5 text-sm font-semibold text-black transition-colors hover:bg-[#B8ACFF] hover:text-black active:bg-[#B8ACFF] active:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8ACFF]"
        >
          <Download size={16} aria-hidden="true" />
          Download PDF
        </a>
      </header>

      <iframe
        src={resumePreviewUrl}
        title="Tharun K V resume PDF viewer"
        className="min-h-[calc(100dvh-4rem)] w-full flex-1 bg-white"
      />
    </main>
  );
}
