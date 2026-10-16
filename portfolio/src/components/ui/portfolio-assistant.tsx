'use client';

import { type FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle, Send, X } from 'lucide-react';
import { assistantKnowledge, type AssistantKnowledgeChunk } from '@/data/assistant-knowledge';

type AssistantMessage = {
  id: number;
  role: 'assistant' | 'user';
  text: string;
  knowledge?: AssistantKnowledgeChunk[];
};

const stopWords = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'can', 'did', 'do', 'does', 'for', 'from',
  'give', 'has', 'have', 'he', 'her', 'his', 'how', 'i', 'in', 'is', 'it', 'me', 'my',
  'of', 'on', 'or', 'please', 'tell', 'that', 'the', 'their', 'there', 'this', 'to',
  'was', 'what', 'when', 'where', 'which', 'who', 'with', 'would', 'you', 'your',
]);

const suggestions = ['Tell me about Tharun', 'What projects has he built?', 'What are his skills?'];

function words(value: string) {
  return value.toLowerCase().match(/[\p{L}\p{N}+#.]+/gu) ?? [];
}

function scrapePortfolioSections(): AssistantKnowledgeChunk[] {
  if (typeof document === 'undefined') return [];

  return Array.from(document.querySelectorAll<HTMLElement>('section[id]')).flatMap((section) => {
      const lines = (section.innerText || '')
        .split(/\n+/)
        .map((line) => line.replace(/\s+/g, ' ').trim())
        .filter((line) => line.length >= 24);
      const title = section.querySelector('h1, h2, h3')?.textContent?.trim() || section.id;
      const tags = words(`${section.id} ${title}`);

      return lines.map((content, index) => ({
        id: `scraped-${section.id}-${index}`,
        title: `${title} section`,
        content: `${title}: ${content}`,
        href: `#${section.id}`,
        tags,
      }));
    });
}

function getRelevantKnowledge(question: string) {
  const normalizedQuestion = question.toLowerCase().trim();
  const queryWords = words(normalizedQuestion).filter((word) => !stopWords.has(word));

  if (/\b(who am i|who is tharun|about yourself|about tharun|introduce yourself)\b/.test(normalizedQuestion)) {
    queryWords.push('about', 'profile');
  }
  if (/\b(where is|where does|location|based in|native place|address)\b/.test(normalizedQuestion)) {
    queryWords.push('location', 'contact');
  }
  if (/\b(reach|contact|email|phone)\b/.test(normalizedQuestion)) queryWords.push('contact');
  if (/\b(all details|my details|about me|tell me about him)\b/.test(normalizedQuestion)) {
    queryWords.push('profile', 'about');
  }
  if (/\b(cv|resume|rÃ©sumÃ©)\b/.test(normalizedQuestion)) queryWords.push('resume');

  if (queryWords.length === 0) return [];

  const knowledge = [...assistantKnowledge, ...scrapePortfolioSections()];
  const ranked = knowledge
    .map((chunk) => {
      const titleWords = new Set(words(chunk.title));
      const contentWords = new Set(words(chunk.content));
      const tagWords = new Set(chunk.tags.flatMap(words));
      let score = 0;

      for (const queryWord of queryWords) {
        if (titleWords.has(queryWord)) score += 4;
        if (tagWords.has(queryWord)) score += 3;
        if (contentWords.has(queryWord)) score += 1.5;
      }

      const phrase = normalizedQuestion.replace(/[?!.,]/g, '').trim();
      if (phrase.length > 5 && chunk.content.toLowerCase().includes(phrase)) score += 5;

      return { chunk, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return ranked
    .slice(0, 5)
    .map(({ chunk }) => chunk)
    .filter((chunk, index, matches) => matches.findIndex((item) => item.id === chunk.id) === index);
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [question, setQuestion] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeFinished, setWelcomeFinished] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: 0,
      role: 'assistant',
      text: "Hi, I'm Jeo, Tharun's AI assistant. Welcome to Tharun K V's portfolio. Ask me about his experience, projects, skills, education, achievements, or contact details.",
    },
  ]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealAssistant = () => setHasRevealed(true);
    if (document.documentElement.dataset.portfolioRevealed === 'true') {
      revealAssistant();
      return;
    }
    window.addEventListener('portfolio:reveal', revealAssistant);
    return () => window.removeEventListener('portfolio:reveal', revealAssistant);
  }, []);

  useEffect(() => {
    if (!hasRevealed) return;
    let dismissTimeout: number | undefined;
    const arrivalTimeout = window.setTimeout(() => {
      setShowWelcome(true);
      dismissTimeout = window.setTimeout(() => {
        setShowWelcome(false);
        setWelcomeFinished(true);
      }, 5000);
    }, shouldReduceMotion ? 0 : 2000);
    return () => {
      window.clearTimeout(arrivalTimeout);
      if (dismissTimeout !== undefined) window.clearTimeout(dismissTimeout);
    };
  }, [hasRevealed, shouldReduceMotion]);

  useEffect(() => {
    if (isOpen) messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [isOpen, messages]);

  const ask = async (rawQuestion: string) => {
    const cleanQuestion = rawQuestion.trim();
    if (!cleanQuestion || isThinking) return;

    const userMessageId = Date.now();
    const previousMessages = messages.filter((message) => message.id !== 0);
    const currentKnowledge = getRelevantKnowledge(cleanQuestion);
    const isFollowUp = /\b(it|that|those|them|more|explain|elaborate|this|its|their|what about)\b/i.test(cleanQuestion);
    const lastAssistantKnowledge = [...messages]
      .reverse()
      .find((message) => message.role === 'assistant' && message.knowledge?.length)?.knowledge ?? [];
    const knowledge = [
      ...currentKnowledge,
      ...(isFollowUp ? lastAssistantKnowledge : []),
    ].filter((chunk, index, chunks) => chunks.findIndex((item) => item.id === chunk.id) === index).slice(0, 6);

    setMessages((current) => [...current, { id: userMessageId, role: 'user', text: cleanQuestion }]);
    setQuestion('');
    setIsThinking(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: cleanQuestion,
          context: knowledge.map(({ id, title, content, href }) => ({ id, title, content, href })),
          history: previousMessages.slice(-8).map(({ role, text }) => ({ role, text })),
        }),
      });
      const result = await response.json().catch(() => null) as { text?: unknown; error?: unknown } | null;

      if (!response.ok || typeof result?.text !== 'string') {
        throw new Error(typeof result?.error === 'string' ? result.error : 'I couldnâ€™t reach Gemini right now. Please try again in a moment.');
      }

      setMessages((current) => [
        ...current,
        { id: userMessageId + 1, role: 'assistant', text: result.text as string, knowledge },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          id: userMessageId + 1,
          role: 'assistant',
          text: error instanceof Error ? error.message : 'I couldnâ€™t reach Gemini right now. Please try again in a moment.',
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(question);
  };

  return (
    <motion.div
      initial={false}
      animate={hasRevealed
        ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
        : { opacity: 0, x: 44, y: 58, scale: 0.62, rotate: 13 }}
      transition={!hasRevealed || shouldReduceMotion
        ? { duration: shouldReduceMotion ? 0.12 : 0 }
        : { type: 'spring', stiffness: 190, damping: 24, mass: 0.9 }}
      style={{ transformOrigin: '100% 100%', pointerEvents: hasRevealed ? 'auto' : 'none' }}
      aria-hidden={!hasRevealed}
      className="fixed bottom-4 right-4 z-[110] sm:bottom-6 sm:right-6"
    >
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.aside
            role="status"
            aria-label="Jeo's welcome message"
            initial={{ opacity: 0, y: 18, scale: 0.78, rotate: 4 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 10, scale: 0.9, rotate: -2 }}
            transition={shouldReduceMotion ? { duration: 0.12 } : { type: 'spring', stiffness: 240, damping: 20 }}
            className="absolute bottom-full right-0 mb-4 flex w-[min(290px,calc(100vw-2rem))] items-start gap-3 rounded-2xl border border-[#5EEAD4]/35 bg-[#0b0b0b]/95 p-4 text-left shadow-[0_16px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <Image src="/jeo-chat-bot.svg" width={40} height={40} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-white">Hi, I&apos;m Jeo.</span>
              <span className="mt-1 block text-xs leading-relaxed text-[#aaa]">How can I help you?</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setShowWelcome(false);
                setWelcomeFinished(true);
              }}
              aria-label="Dismiss Jeo's welcome message"
              className="-mr-1 -mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-[#888] transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={15} aria-hidden="true" />
            </button>
            <span aria-hidden="true" className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-[#5EEAD4]/35 bg-[#0b0b0b]" />
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            id="portfolio-assistant-panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Jeo, Tharun's portfolio assistant"
            className="mb-3 flex h-[min(72dvh,620px)] w-[min(calc(100vw-2rem),410px)] flex-col overflow-hidden rounded-3xl border border-[#333] bg-[#080808] shadow-[0_24px_90px_rgba(0,0,0,0.65)]"
          >
            <header className="flex items-center justify-between gap-3 border-b border-[#222] bg-[#0d0d0d] px-4 py-3.5">
              <div className="flex min-w-0 items-center gap-3">
                <Image src="/jeo-chat-bot.svg" width={40} height={40} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">Jeo‑Tharun&apos;s AI Assistant</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#aaa] transition-colors hover:bg-[#B8ACFF]/20 active:bg-[#B8ACFF]/30 hover:text-[#B8ACFF] active:text-[#B8ACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8ACFF]">
                <X size={19} aria-hidden="true" />
              </button>
            </header>

            <div aria-live="polite" className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[92%] rounded-2xl px-4 py-3 ${message.role === 'user' ? 'rounded-br-md bg-[#5EEAD4] text-black' : 'rounded-bl-md border border-[#252525] bg-[#111] text-[#ddd]'}`}>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              {isThinking && (
                <div role="status" className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-[#252525] bg-[#111] px-4 py-3 text-sm text-[#aaa]">
                    Jeo is thinking...
                  </div>
                </div>
              )}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => ask(suggestion)}
                      className="rounded-full border border-[#333] px-3 py-2 text-left text-xs text-[#aaa] transition-colors hover:border-[#B8ACFF]/60 hover:text-[#B8ACFF] active:text-[#B8ACFF]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messageEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-[#222] p-3">
              <label className="sr-only" htmlFor="portfolio-assistant-question">Ask Jeo about Tharun</label>
              <input
                id="portfolio-assistant-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask Jeo about Tharun..."
                disabled={isThinking}
                className="min-h-11 min-w-0 flex-1 rounded-full border border-[#292929] bg-[#111] px-4 text-sm text-white outline-none placeholder:text-[#666] focus:border-[#B8ACFF]/70"
              />
              <button
                type="submit"
                aria-label="Send question"
                disabled={!question.trim() || isThinking}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5EEAD4] text-black transition-colors hover:bg-[#B8ACFF] hover:text-black active:bg-[#B8ACFF] active:text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
            <p className="px-4 pb-2 text-center text-[10px] text-[#666]">Gemini answers grounded in Tharun&apos;s portfolio and resume.</p>
          </motion.aside>
        )}
      </AnimatePresence>

      {welcomeFinished && !isOpen && <motion.button
        type="button"
        onClick={() => {
          setShowWelcome(false);
          setIsOpen(true);
        }}
        tabIndex={hasRevealed ? 0 : -1}
        aria-expanded={isOpen}
        aria-controls="portfolio-assistant-panel"
        aria-label="Ask Jeo"
        className="ml-auto flex min-h-14 items-center gap-2.5 rounded-full border border-[#5EEAD4]/40 bg-[#5EEAD4] px-5 text-sm font-semibold text-black shadow-[0_10px_42px_rgba(94,234,212,0.2)] transition-colors hover:bg-[#B8ACFF] hover:text-black active:bg-[#B8ACFF] active:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8ACFF]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>Ask Jeo</span>
      </motion.button>}
    </motion.div>
  );
}
