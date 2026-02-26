/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Link as LinkIcon, Phone, Cpu, Code, Brain, Layers, Database, Server, Cloud, Menu, ChevronDown, Briefcase, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-2 flex items-center gap-4">
      <span className="text-primary">{number}.</span> {title}
      <div className="h-px bg-primary/20 flex-grow"></div>
    </h2>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="scanline-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-primary/10 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tighter">
            [<span className="text-primary">Aashish Porwal</span>]
          </div>
          
          <div className="hidden md:flex space-x-8 text-[10px] font-semibold tracking-widest uppercase">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`hover:text-primary transition-colors ${item === 'Contact' ? 'text-primary' : 'text-white/70'}`}
              >
                0{i + 1}.{item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-8 text-xl font-display">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-primary tracking-widest"
            >
              0{i + 1}.{item}
            </a>
          ))}
          <button onClick={() => setIsMenuOpen(false)} className="text-white/50 text-sm uppercase tracking-widest mt-8">Close</button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 matrix-bg">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div 
            className="absolute inset-0 border-[0.5px] border-primary/20" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0,255,209,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.05) 1px, transparent 1px)', 
              backgroundSize: '50px 50px' 
            }} 
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: bootSequence ? 1 : 0, x: bootSequence ? 0 : -20 }}
            className="mb-4"
          >
            <span className="text-terminal-green text-xs md:text-sm font-mono">&gt; SYSTEM BOOT SEQUENCE COMPLETE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-5xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none flicker"
          >
            <span className="glitch-text text-white">AASHISH</span><br />
            <span className="glitch-text text-white">PORWAL</span>
            <span className="inline-block w-6 h-10 md:w-10 md:h-16 bg-primary ml-4 cursor-blink align-middle" />
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-2 mb-12 text-sm md:text-lg font-medium"
          >
            <div className="flex items-center">
              <span className="text-primary mr-3 text-lg md:text-xl">//</span>
              <span className="uppercase tracking-widest text-white/80">AI Engineer</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary mr-3 text-lg md:text-xl">//</span>
              <span className="uppercase tracking-widest text-white/80">Specializing in LLM-powered applications</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary mr-3 text-lg md:text-xl">//</span>
              <span className="uppercase tracking-widest text-white/80">Location: Indore, India</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all text-center text-sm">
              VIEW_PROJECTS
              <div className="absolute -inset-1 border border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="group relative px-8 py-4 border border-primary/50 text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all text-center text-sm">
              DOWNLOAD_RESUME.PDF
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[8px] tracking-[0.3em] uppercase">[ SCROLL_TO_INIT ]</span>
          <ChevronDown className="animate-bounce text-primary" size={20} />
        </div>

        <div className="hidden lg:block absolute bottom-10 right-10 p-4 terminal-border bg-black/40 backdrop-blur-sm text-[10px] leading-relaxed">
          <div className="flex justify-between gap-8 mb-2">
            <span>STATUS: ONLINE</span>
            <span className="text-primary">CORE_V1.0</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-3 bg-primary" />
            <div className="w-1.5 h-3 bg-primary" />
            <div className="w-1.5 h-3 bg-primary" />
            <div className="w-1.5 h-3 bg-primary/30" />
            <div className="w-1.5 h-3 bg-primary/30" />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto" id="about">
        <SectionHeader number="01" title="Summary" />
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 text-base md:text-lg leading-relaxed text-white/70">
            <p className="mb-6">
              AI Engineer with experience designing and deploying <span className="text-primary">LLM-powered applications</span>, document intelligence pipelines, and multi-agent systems.
            </p>
            <p>
              Skilled in fine-tuning models (<span className="text-primary">LoRA/QLoRA</span>), building RAG architectures, and implementing LangGraph-based workflows to automate complex decision processes and reduce manual effort.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 terminal-border bg-primary/5 relative"
          >
            <div className="absolute -top-3 -right-3 text-primary bg-black p-1">
              <Cpu size={24} />
            </div>
            <h3 className="text-xs font-bold uppercase mb-4 text-primary tracking-widest">Focus Areas</h3>
            <ul className="text-[10px] space-y-3 opacity-80 font-mono">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> GENERATIVE AI / LLMs</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> MULTI-AGENT SYSTEMS</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> RAG ARCHITECTURES</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> AI DEPLOYMENT</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-primary/5" id="skills">
        <div className="max-w-5xl mx-auto">
          <SectionHeader number="02" title="Technical_Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Code size={18} />, title: "LANGUAGES", content: "Python, SQL, JavaScript" },
              { icon: <Brain size={18} />, title: "AI / ML", content: "LLMs, Model Training, LoRA, QLoRA, RAG, Embeddings, OCR (Tesseract), VLMs, Prompt Engineering, AI Deployment" },
              { icon: <Layers size={18} />, title: "FRAMEWORKS", content: "LangChain, LangGraph, MCP, OpenAI, Anthropic, DeepSeek" },
              { icon: <Database size={18} />, title: "DATABASES", content: "Qdrant, ChromaDB, FAISS, MongoDB, MySQL" },
              { icon: <Server size={18} />, title: "BACKEND", content: "FastAPI, Django, Flask, DRF, REST APIs, JWT" },
              { icon: <Cloud size={18} />, title: "CLOUD & TOOLS", content: "AWS (EC2, S3), Docker, Redis, Git, GitHub, GitLab, Jira, Swagger" }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 terminal-border hover:bg-primary/10 transition-colors group"
              >
                <h3 className="text-primary font-bold mb-4 flex items-center gap-2 text-sm">
                  {skill.icon} {skill.title}
                </h3>
                <p className="text-xs leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{skill.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto" id="experience">
        <SectionHeader number="03" title="Experience" />
        <div className="space-y-12">
          {[
            {
              role: "Software Developer (AI/ML)",
              company: "ThoughtWin IT Solutions",
              period: "Aug 2025 – Present",
              points: [
                "Engineered scalable AI pipelines integrating OCR, embeddings, and vector search for unstructured data.",
                "Architected multi-agent workflows using LangGraph for adaptive task routing and complex reasoning.",
                "Deployed RAG systems using Qdrant and ChromaDB to deliver context-aware responses.",
                "Fine-tuned domain-specific models using LoRA and QLoRA techniques.",
                "Built MCP servers enabling seamless integration between legacy APIs and AI-driven applications."
              ]
            },
            {
              role: "Jr. Python Developer",
              company: "Growing IT Solutions",
              period: "Feb 2024 – Present",
              points: [
                "Built AI-powered chat and report bots using OpenAI and Anthropic APIs, automating responses for document-based queries and reducing manual support effort by 60%.",
                "Designed scalable backend services using Django and FastAPI, supporting concurrent users with reliable role-based access control.",
                "Containerized applications with Docker, reducing deployment inconsistencies across environments.",
                "Automated WhatsApp workflows handling 60% of customer interactions, significantly improving response time."
              ]
            },
            {
              role: "Python Developer Intern",
              company: "TalkWisely Platforms",
              period: "Aug 2023 – Dec 2023",
              points: [
                "Engineered REST APIs using FastAPI and integrated telecommunication workflows with Asterisk.",
                "Applied OCR techniques using Tesseract for automated document processing.",
                "Managed structured and unstructured data using MySQL and MongoDB databases."
              ]
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l border-primary/20"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#00FFD1]" />
              <div className="mb-4">
                <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                <div className="flex justify-between items-center text-xs text-primary font-mono mt-1">
                  <span>{exp.company}</span>
                  <span className="opacity-60">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-white/60 flex gap-3">
                    <span className="text-primary mt-1.5"><Briefcase size={12} /></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-primary/5" id="projects">
        <div className="max-w-5xl mx-auto">
          <SectionHeader number="04" title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "DDC — 360F (AI Recommendation System)",
                points: [
                  "Optimized OCR + VLM pipeline, reducing 20-page PDF processing time from 280s to 45–60s.",
                  "Constructed a robust extraction workflow for scanned and unstructured documents.",
                  "Migrated system to LangGraph with a master agent orchestrating Fact Find, Gap Analysis, and Recommendation phases.",
                  "Established MCP server exposing legacy APIs for real-time system integration."
                ]
              },
              {
                title: "ProtoBots AI",
                points: [
                  "Integrated multiple LLM providers for document-centric conversational AI systems.",
                  "Built an LLM benchmarking platform to evaluate accuracy, latency, and cost efficiency.",
                  "Leveraged embeddings and vector search to enhance information retrieval from large documents."
                ]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 terminal-border bg-black/40 hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Rocket size={20} className="text-primary" />
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <ul className="space-y-4">
                  {project.points.map((point, j) => (
                    <li key={j} className="text-sm text-white/50 flex gap-3 leading-relaxed">
                      <span className="text-primary/40 mt-1.5">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-24 px-6 border-t border-primary/10 relative overflow-hidden" id="contact">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            whileInView={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="font-display text-4xl md:text-6xl font-black mb-12 tracking-tighter text-white"
          >
            CONNECT_SYSTEM
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a href="mailto:porwalaashish9@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
              <Mail size={18} className="text-primary" /> porwalaashish9@gmail.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
              <LinkIcon size={18} className="text-primary" /> LinkedIn
            </a>
            <a href="tel:+917389304078" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
              <Phone size={18} className="text-primary" /> +91 7389304078
            </a>
          </div>
          
          <div className="pt-8 border-t border-primary/5">
            <p className="text-[8px] tracking-[0.4em] opacity-40 uppercase">
              © 2025 AASHISH PORWAL // ALL SYSTEMS OPERATIONAL
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
