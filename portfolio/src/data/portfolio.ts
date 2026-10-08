export interface SiteConfig {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  addressLine1: string;
  addressLine2: string;
  locationDisplay: [string, string];
  nativeLocationDisplay: [string, string];
  role: string;
  university: string;
  degree: string;
  graduationYear: string;
  cgpa: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image?: string;
  certificateLink?: string;
  details?: { label: string, value: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Tharun K V",
  email: "tharunkv742004@gmail.com",
  phone: "+918277487233",
  github: "https://github.com/Tharun-Kv",
  linkedin: "https://www.linkedin.com/in/tharun-venkatesh-b811bb269/",
  leetcode: "https://leetcode.com/u/Tharunkv/",
  addressLine1: "JP Nagar 8th Phase, Jambusavari Dinne, 560078, Bengaluru, Karnataka, India",
  addressLine2: "K Kodihalli, Maddur Taluk, Mandya District, 571428, Karnataka, India",
  locationDisplay: [
    "JP Nagar 8th Phase, Jambusavari Dinne",
    "Bengaluru, Karnataka — 560078",
  ],
  nativeLocationDisplay: [
    "K Kodihalli, Maddur Taluk",
    "Mandya District, Karnataka — 571428",
  ],
  role: "AI/ML Engineer | Software Engineer",
  university: "GITAM University, Bengaluru Campus",
  degree: "BTech in Artificial Intelligence & Machine Learning",
  graduationYear: "2026",
  cgpa: "7.7/10",
  summary: "Final-year B.Tech (AI & ML) student and recent AI/ML Engineering Intern at Dview, with hands-on experience building production AI content pipelines, test automation, and voice-AI features using Python, Fast API, and LLMs. AWS Certified, with strong full-stack development experience across Python, JavaScript/TypeScript, and cloud infrastructure (AWS, S3/CloudFront). Seeking full-time AI/ML Engineer or Software Engineer roles."
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "AI/ML Engineering Intern",
    company: "Dview",
    duration: "May 2026 — September 2026",
    location: "Bengaluru, India",
    description: [
      "Engineered dview-blog-generator, an end-to-end AI content pipeline (Python, FastAPI, OpenAI/Gemini API, Sanity CMS) automating SEO topic discovery, blog generation, and competitor analysis via RSS feeds and RAKE NLP keyword extraction",
      "Refactored the pipeline into a layered, production-grade architecture (DAO/DTO services, enums, centralized constants, structured logging) per tech-lead code review, and implemented blog versioning (Published → Under Revision → Published) with Alembic-driven schema migrations",
      "Built and enforced 16 automated editorial quality checks (passive voice, SEO keyword density, repetition detection) and a review UI for approval workflows and AI-generated thumbnails",
      "Implemented domain-restricted Google OAuth (@dview.io) with JWT/session-based authentication and session-scoped audit logging for editorial actions",
      "Designed a voice-cloning/narration pipeline (Whisper, Chatterbox TTS, FFmpeg) replacing AI narration in videos with natural cloned voices, deployed via AWS S3/CloudFront",
      "Contributed to the dview-ui codebase (Next.js, TypeScript, Sanity CMS), including CMS schema deployment workflows and brand asset design"
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "Next.js", "AWS", "Sanity CMS"]
  },
  {
    id: "exp-2",
    title: "Frontend Developer Intern",
    company: "Techverve Solutions",
    duration: "May 2025 — June 2025",
    location: "Bengaluru, India",
    description: [
      "Developed responsive and user-friendly web interfaces using React.js",
      "Integrated Firebase for application functionality and backend services",
      "Worked on reusable UI components and improved frontend usability",
      "Collaborated on real-world development tasks while following practical software development workflows",
      "Gained hands-on experience building and refining production-oriented web applications"
    ],
    techStack: ["React.js", "JavaScript", "Firebase", "HTML", "CSS", "Git"]
  }
];

export const projects: Project[] = [
  {
    id: "proj-3",
    title: "Smart E-Commerce Website",
    description: "React-based e-commerce frontend with product comparison.",
    longDescription: "Developed a React-based e-commerce frontend with product comparison across price, performance, and features, using Firebase authentication and modular, reusable components.",
    techStack: ["React", "Firebase", "JavaScript"],
    category: ["Frontend", "Full-Stack"],
    githubUrl: "https://github.com/Tharun-Kv/Smart-Ecommerce",
    featured: true
  },
  {
    id: "proj-1",
    title: "BTech Capstone — Fog Computing IoT",
    description: "Hybrid Metaheuristic Optimization for Secure IoT Data Migration in Fog Computing.",
    longDescription: "Led a hybrid optimization approach (SCCSO, SCPSO, Grey Wolf Optimizer, Federated Learning) using iFogSim2 and Java; authored a 40+ page academic paper and built a Chart.js performance dashboard.",
    techStack: ["Java", "iFogSim2", "Chart.js", "Machine Learning", "Federated Learning"],
    category: ["Research", "Data & Infrastructure"],
    githubUrl: "https://github.com/Saisruthi949150/iFogSim-main",
    featured: true
  },
  {
    id: "proj-2",
    title: "Visual Aid Learning Platform",
    description: "Accessibility-focused learning platform for visually impaired learners.",
    longDescription: "Built an accessibility-focused learning platform using OCR to extract diagrams and equations from STEM content, paired with Text-to-Speech conversion to support visually impaired learners.",
    techStack: ["Python", "OCR", "Text-to-Speech"],
    category: ["AI / ML", "Accessibility"],
    githubUrl: "https://github.com/Tharun-Kv/visual-aid-learning-platform",
    featured: true
  },
  {
    id: "proj-4",
    title: "Hotel Guest Assistant",
    description: "Intelligent AI assistant for hotel guest services",
    longDescription: "An automated hotel guest assistant system designed to handle guest queries, automate service requests, and provide localized recommendations using natural language processing.",
    techStack: ["Python", "FastAPI", "NLP", "React"],
    category: ["AI / ML", "Backend"],
    githubUrl: "https://github.com/Tharun-Kv/hotel-guest-assistant",
    featured: true
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"]
  },
  {
    category: "AI/ML & Backend",
    skills: ["FastAPI", "Google Gemini API", "OpenAI API", "LLM/Prompt Engineering", "RAKE NLP", "Chatterbox TTS", "Whisper"]
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Alpine.js", "Jinja", "Chart.js"]
  },
  {
    category: "Data & Infrastructure",
    skills: ["PostgreSQL", "Sanity CMS", "Alembic", "AWS", "S3/CloudFront"]
  },
  {
    category: "Testing & Tools",
    skills: ["Git", "OAuth/JWT"]
  }
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "GITAM University, Bengaluru Campus",
    degree: "BTech in Artificial Intelligence & Machine Learning",
    duration: "Class of 2026",
    score: "CGPA: 7.7 / 10"
  },
  {
    id: "edu-2",
    institution: "Mandavya Excellence PU College, Mandya",
    degree: "PUC (PCMB)",
    duration: "June 2020 — July 2022",
    score: "91%"
  },
  {
    id: "edu-3",
    institution: "RK Educational Institution, Maddur",
    degree: "SSLC",
    duration: "June 2019 — May 2020",
    score: "93.94%"
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Smart India Hackathon",
    subtitle: "Grand Finale (Software Edition) · Dec 2025",
    description: "Selected for the Smart India Hackathon Grand Finale. Built a UFDR Analysis Tool for investigating large-scale mobile forensic data using technologies including RAG, LangChain, ChromaDB, and Neo4j.",
    badge: "NATIONAL FINALIST",
    image: "/sih-hackathon.jpg",
    certificateLink: "/sih-cert.jpg",
    details: [
      { label: "Organization", value: "Ministry of Home Affairs (MHA)" },
      { label: "Team", value: "Metrominds_Gblr" },
      { label: "Problem ID", value: "25198" },
      { label: "Institute", value: "GITAM Bengaluru" }
    ]
  },
  {
    id: "ach-2",
    title: "BioMed Bharat / GITAM – AMTZ Hackathon",
    subtitle: "Runner-up · 2024",
    description: "Participated in the biomedical hackathon focused on solving real-world healthcare problems. Developed and presented an automated injection system prototype within a competitive, time-constrained environment.",
    badge: "RUNNER UP",
    image: "/biomed-hackathon.png",
    certificateLink: "/biomed-cert.png",
    details: [
      { label: "Team Name", value: "KEMPEGOWDA" },
      { label: "Award", value: "Runner-up (₹25,000)" }
    ]
  }
];
