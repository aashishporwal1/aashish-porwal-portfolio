import { NavLink, SkillCategory, Experience, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: '01', label: 'ABOUT', href: '#about' },
  { id: '02', label: 'SKILLS', href: '#skills' },
  { id: '03', label: 'EXPERIENCE', href: '#experience' },
  { id: '04', label: 'PROJECTS', href: '#projects' },
  { id: '05', label: 'CONTACT', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Terminal',
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'AI / ML',
    icon: 'Brain',
    skills: ['LLMs', 'Model Training', 'LoRA, QLoRA', 'RAG', 'Embeddings', 'OCR (Tesseract)', 'VLMs', 'Prompt Engineering', 'AI Deployment'],
  },
  {
    title: 'Frameworks',
    icon: 'Layers',
    skills: ['LangChain', 'LangGraph', 'MCP', 'OpenAI', 'Anthropic', 'DeepSeek'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['Qdrant', 'ChromaDB', 'FAISS', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['FastAPI', 'Django', 'Flask', 'DRF', 'REST APIs', 'JWT'],
  },
  {
    title: 'Cloud & Tools',
    icon: 'Cloud',
    skills: ['AWS (EC2, S3)', 'Docker', 'Redis', 'Git', 'GitHub', 'GitLab', 'Jira', 'Swagger'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Developer (AI/ML)',
    company: 'ThoughtWin IT Solutions',
    period: 'Aug 2025 – Present',
    location: 'Indore, M.P.',
    description: [
      'Engineered scalable AI pipelines integrating OCR, embeddings, and vector search for unstructured data.',
      'Architected multi-agent workflows using LangGraph for adaptive task routing and complex reasoning.',
      'Deployed RAG systems using Qdrant and ChromaDB to deliver context-aware responses.',
      'Fine-tuned domain-specific models using LoRA and QLoRA techniques.',
      'Built MCP servers enabling seamless integration between legacy APIs and AI-driven applications.',
    ],
  },
  {
    role: 'Jr. Python Developer',
    company: 'Growing IT Solutions',
    period: 'Feb 2024 – Jul 2025',
    location: 'Ahmedabad, Gujarat',
    description: [
      'Built AI-powered chat and report bots using OpenAI and Anthropic APIs, automating responses for document-based queries and reducing manual support effort by 60%.',
      'Designed scalable backend services using Django and FastAPI, supporting concurrent users with reliable role-based access control.',
      'Containerized applications with Docker, reducing deployment inconsistencies across environments.',
      'Automated WhatsApp workflows handling 60% of customer interactions, significantly improving response time.',
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'TalkWisely Platforms',
    period: 'Aug 2023 – Dec 2023',
    location: 'Ahmedabad, Gujarat',
    description: [
      'Engineered REST APIs using FastAPI and integrated telecommunication workflows with Asterisk.',
      'Applied OCR techniques using Tesseract for automated document processing.',
      'Managed structured and unstructured data using MySQL and MongoDB databases.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'DDC — AI Insurance Planner',
    description: [
      'Engineered a document intelligence pipeline for insurance PDFs, reducing processing time by ~80% (280s → 45–60s).',
      'Optimized OCR + VLM pipeline for extraction from scanned and unstructured documents.',
      'Migrated system to LangGraph with a master agent orchestrating Fact Find, Gap Analysis, and Recommendation phases.',
      'Established MCP server exposing legacy APIs for real-time system integration.',
    ],
  },
  {
    title: 'Pro-Bots AI',
    description: [
      'Integrated multiple LLM providers for document-centric conversational AI systems.',
      'Built an LLM benchmarking platform to evaluate accuracy, latency, and cost efficiency.',
      'Leveraged embeddings and vector search to enhance information retrieval from large documents.',
    ],
  },
  {
    title: 'ContextIQ',
    description: [
      'Built an Adaptive RAG system with agentic AI, enabling dynamic query routing across indexed data, LLM knowledge, and web search.',
      'Implemented multi-agent workflows using LangGraph and ReAct, improving response accuracy via query classification and optimization.',
      'Developed a scalable FastAPI backend with async processing, integrated with Qdrant (vector DB) and MongoDB for efficient retrieval and session memory.',
      'Built a complete RAG pipeline (ingestion, chunking, embeddings, retrieval) supporting PDF/TXT documents with enhanced search relevance.',
      'Designed a Streamlit-based chat interface for real-time document interaction and AI-powered responses.',
    ],
  },
  {
    title: 'Immutec Web Portal',
    description: [
      'Built a Django-based web application with REST APIs to manage users, companies, categories, and resources, with secure role-based access control (RBAC) for both admin and regular users.',
      'Added support for ticket creation and implemented automatic ticket scheduling, streamlining issue tracking and improving response times.',
      'Integrated email functionality using Mailgun webhooks for automated notifications and handling ticket email replies, improving communication efficiency.',
      'Deployed the application on AWS EC2, ensuring high availability and scalable performance.',
    ],
  },
];
