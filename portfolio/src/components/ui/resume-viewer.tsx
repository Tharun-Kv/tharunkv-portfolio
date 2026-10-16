'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, X } from 'lucide-react';

const resumeUrl = '/Tharun-KV-Resume.pdf';
const resumePreviewUrl = 'https://drive.google.com/file/d/1ZEOu35ayfXo6Cq0M8cNTqn-qxB39IqHl/preview';

export default function ResumeViewerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333] px-5 text-sm font-medium text-[#ccc] transition-colors hover:border-[#777] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8ACFF]"
      >
        View Resume
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-5 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-viewer-title"
              className="flex max-h-[84dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#333] bg-[#080808] shadow-[0_24px_90px_rgba(0,0,0,0.7)]"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="flex items-center justify-between gap-3 border-b border-[#222] px-4 py-3 sm:px-6 sm:py-4">
                <h2 id="resume-viewer-title" className="min-w-0 truncate text-base font-semibold text-white sm:text-lg">
                  Tharun K V — Resume
                </h2>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={resumeUrl}
                    download="Tharun-KV-Resume.pdf"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#5EEAD4] px-3 text-xs font-semibold text-black transition-colors hover:bg-[#B8ACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8ACFF] sm:px-4 sm:text-sm"
                  >
                    <Download size={15} aria-hidden="true" />
                    <span>Download</span>
                  </a>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close resume viewer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#333] text-[#aaa] transition-colors hover:border-[#555] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8ACFF]"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>
              </header>
              <div className="min-h-0 flex-1 bg-[#111]">
                <iframe
                  src={resumePreviewUrl}
                  title="Tharun K V resume PDF"
                  className="h-[62dvh] min-h-[46dvh] w-full bg-white sm:h-[68dvh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
