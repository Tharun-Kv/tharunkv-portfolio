import { achievements, education, experiences, projects, siteConfig, skills } from '@/data/portfolio';

export interface AssistantKnowledgeChunk {
  id: string;
  title: string;
  content: string;
  href: string;
  tags: string[];
}

export const assistantKnowledge: AssistantKnowledgeChunk[] = [
  {
    id: 'profile',
    title: 'About Tharun',
    content: `${siteConfig.name} is a ${siteConfig.role}. ${siteConfig.summary}`,
    href: '#about',
    tags: ['about', 'profile', 'bio', 'summary', 'role', 'myself'],
  },
  {
    id: 'contact',
    title: 'Contact and location',
    content: `Email: ${siteConfig.email}. Phone: ${siteConfig.phone}. Based in ${siteConfig.addressLine1}. Native place: ${siteConfig.addressLine2}. Website: tharunkv.netlify.app. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}. LeetCode: ${siteConfig.leetcode}.`,
    href: '#contact',
    tags: ['contact', 'email', 'phone', 'location', 'address', 'based', 'native', 'github', 'linkedin', 'leetcode', 'website'],
  },
  ...experiences.flatMap((experience) => [
    {
      id: `${experience.id}-overview`,
      title: `${experience.title} at ${experience.company}`,
      content: `${experience.title} at ${experience.company}, ${experience.duration}, ${experience.location}. Technologies: ${experience.techStack?.join(', ') ?? 'not listed'}.`,
      href: '#experience',
      tags: ['experience', 'internship', 'work', 'job', 'career', experience.company.toLowerCase()],
    },
    ...experience.description.map((detail, index) => ({
      id: `${experience.id}-detail-${index}`,
      title: `${experience.company} work detail`,
      content: `${experience.title} at ${experience.company}: ${detail}`,
      href: '#experience',
      tags: ['experience', 'internship', 'work', experience.company.toLowerCase()],
    })),
  ]),
  ...projects.map((project) => ({
    id: project.id,
    title: project.title,
    content: `${project.title}. ${project.longDescription} Technologies: ${project.techStack.join(', ')}. Categories: ${project.category.join(', ')}.${project.githubUrl ? ` GitHub: ${project.githubUrl}.` : ''}${project.liveUrl ? ` Live demo: ${project.liveUrl}.` : ''}`,
    href: '#projects',
    tags: ['project', 'built', 'developed', 'work', ...project.category.map((category) => category.toLowerCase())],
  })),
  ...skills.map((category) => ({
    id: `skills-${category.category}`,
    title: category.category,
    content: `${category.category}: ${category.skills.join(', ')}.`,
    href: '#skills',
    tags: ['skill', 'skills', 'technology', 'technologies', 'stack', 'tools', category.category.toLowerCase()],
  })),
  ...education.map((item) => ({
    id: item.id,
    title: item.institution,
    content: `${item.institution}: ${item.degree}, ${item.duration}, ${item.score}.`,
    href: '#about',
    tags: ['education', 'college', 'university', 'degree', 'study', 'studied', 'cgpa', 'marks', item.institution.toLowerCase()],
  })),
  ...achievements.map((achievement) => ({
    id: achievement.id,
    title: achievement.title,
    content: `${achievement.title} — ${achievement.subtitle}. ${achievement.description} ${achievement.details?.map((detail) => `${detail.label}: ${detail.value}.`).join(' ') ?? ''}`,
    href: '#achievements',
    tags: ['achievement', 'award', 'recognition', 'hackathon', achievement.title.toLowerCase()],
  })),
  {
    id: 'resume-skills',
    title: 'Resume technical skills',
    content: 'Resume technical skills include Python, JavaScript, TypeScript, Java, FastAPI, Google Gemini API, OpenAI API, LLM and prompt engineering, RAKE NLP, Chatterbox TTS, Whisper, Next.js, React, Alpine.js, Jinja, Three.js, Chart.js, PostgreSQL, Sanity CMS, Alembic, AWS, Git, OAuth, and JWT.',
    href: '#resume',
    tags: ['resume', 'skills', 'skill', 'technology', 'technologies', 'programming', 'language', 'stack'],
  },
  {
    id: 'resume-projects',
    title: 'Resume project details',
    content: 'Resume projects include the Visual Aid Learning Platform, which uses OCR to extract diagrams and equations from STEM content and Text-to-Speech to support visually impaired learners; Smart E-Commerce Website, a React frontend with product comparison and Firebase authentication; and a BTech capstone on secure IoT data migration in fog computing, using SCCSO, SCPSO, Grey Wolf Optimizer, Federated Learning, iFogSim2, and Java. The capstone included a 40+ page paper and Chart.js performance dashboard.',
    href: '#projects',
    tags: ['resume', 'project', 'projects', 'capstone', 'visual', 'ecommerce', 'e-commerce', 'iot', 'fog'],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: 'Certificates listed in the portfolio include Tata GenAI Certificate; Tata GenAI Powered Data Analytics Certificate; AWS Course Completion Certificate; Unstop Certificate of Excellence; Unstop Certificate of Participation; Coursera certificates; Tharun PPM Certificate; Excel Part 1, Part 2, and Part 3 Certificates; Maths Coursera Certificate; Techverve Internship Completion Certificate; Emotion Intelligence Certificate; C1 Certificate; and other Coursera certificates. The resume also lists AWS Certification and the BCG GenAI Job Simulation from Forage (July 2025).',
    href: '#certifications',
    tags: ['certificate', 'certification', 'certifications', 'course', 'courses', 'aws', 'tata', 'coursera', 'bcg', 'forage', 'unstop'],
  },
  {
    id: 'resume-link',
    title: 'View or download the resume',
    content: 'Tharun’s resume can be viewed in the Resume section of the portfolio and downloaded from the resume page.',
    href: '#resume',
    tags: ['resume', 'cv', 'download', 'document'],
  },
];
