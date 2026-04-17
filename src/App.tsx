/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  Terminal, 
  Brain, 
  Layers, 
  Database, 
  Server, 
  Cloud, 
  ChevronDown, 
  Cpu, 
  Code2, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Sparkles,
  Zap,
  Activity,
  MapPin
} from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS, SKILL_CATEGORIES, EXPERIENCES, PROJECTS } from "./constants";

const MotionSection = motion.section;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-ai-bg/80 backdrop-blur-xl border-b border-ai-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-lg bg-ai-primary flex items-center justify-center">
            <Brain size={18} className="text-white" />
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight uppercase">Aashish Porwal</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-ai-primary transition-all uppercase"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ai-bg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col space-y-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold tracking-[0.2em] text-gray-400 hover:text-ai-primary uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ id, title }: { id: string; title: string }) => {
  return (
    <div className="flex flex-col mb-16 relative">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        className="text-[10px] font-bold tracking-[0.3em] text-ai-primary mb-2 uppercase"
      >
        Section {id}
      </motion.span>
      <div className="flex items-center space-x-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          {title}
        </motion.h2>
        <div className="h-px bg-gradient-to-r from-ai-primary/50 to-transparent flex-grow" />
      </div>
    </div>
  );
};

const SkillIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'Terminal': return <Terminal size={22} />;
    case 'Brain': return <Brain size={22} />;
    case 'Layers': return <Layers size={22} />;
    case 'Database': return <Database size={22} />;
    case 'Server': return <Server size={22} />;
    case 'Cloud': return <Cloud size={22} />;
    default: return <Code2 size={22} />;
  }
};

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full neural-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full neural-mesh opacity-20" />
      
      {/* Decorative Blur Spheres */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-ai-primary/20 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-24 w-80 h-80 bg-ai-secondary/15 rounded-full blur-[100px]" 
      />
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen custom-scrollbar bg-ai-bg">
      <BackgroundElements />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ai-primary to-ai-secondary origin-left z-[60]"
        style={{ scaleX }}
      />

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-ai-primary/10 border border-ai-primary/20 backdrop-blur-sm">
                <Sparkles size={14} className="text-ai-accent" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-ai-accent uppercase">Empowering Intelligence</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white">
                  Aashish <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent">Porwal</span>
                </h1>
              </div>

              <div className="space-y-4 max-w-xl">
                <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed">
                  Most AI demos fail in production.{" "}
                  <span className="text-white italic">I build systems that don’t.</span>{" "}
                  Focused on building production-ready applications using{" "}
                  <span className="text-ai-accent">LLMs, RAG, and Multi-Agent Systems.</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-ai-primary text-white px-10 py-5 rounded-2xl font-bold tracking-wider transition-all cursor-pointer inline-block"
                >
                  View Projects
                </motion.a>
                <motion.a 
                  href="https://drive.google.com/file/d/1C5Q4wgSMwpzZtM9kcq2NXKxOaNXoQf8w/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-ai-border text-white px-10 py-5 rounded-2xl font-bold tracking-wider transition-all backdrop-blur-md cursor-pointer inline-block"
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-ai-primary to-ai-secondary rounded-full opacity-20 blur-[80px] animate-pulse" />
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1px] border-dashed border-ai-primary/30 rounded-full" 
                  />
                  <div className="relative z-10 w-64 h-64 glass-card rounded-full flex items-center justify-center p-8 floating-node">
                    <Brain size={120} className="text-ai-primary opacity-80" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
          >
            <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">Explore Neural Space</span>
            <ChevronDown className="text-ai-primary" size={20} />
          </motion.div>
        </section>

        {/* SUMMARY SECTION */}
        <MotionSection id="about" className="py-32">
          <SectionHeader id="01" title="Cognitive Summary" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-xl text-gray-400 leading-relaxed font-light"
            >
              <p>
                I’m an{" "}
                <span className="text-white font-medium">AI Engineer</span>{" "}
                focused on building production-ready applications using LLMs, RAG, and multi-agent systems. Over the past{" "}
                <b>2.5+ years</b>, I’ve worked on turning AI from experimentation into{" "}
                <span className="text-ai-secondary">real-world systems</span>{" "}
                that automate workflows, reduce manual effort, and improve decision-making.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-ai-accent uppercase">CURRENTLY FOCUSED ON</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Improving retrieval accuracy in RAG systems",
                    "Reducing latency in AI applications",
                    "Building reliable, production-grade AI APIs",
                    "Exploring new advancements in agents and model design"
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-ai-accent rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-2">2.5+ YEARS</h4>
                  <p className="text-xs uppercase tracking-widest text-ai-primary">Development Exp</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">2+ MODELS</h4>
                  <p className="text-xs uppercase tracking-widest text-ai-primary">Fine-Tuned</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-ai-primary/10 rounded-xl">
                  <Activity size={24} className="text-ai-primary" />
                </div>
                <h3 className="text-lg font-bold tracking-wider">DOMAIN METRICS</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "LLM Orchestration", value: 95 },
                  { label: "RAG Architecture", value: 90 },
                  { label: "Agentic Design", value: 85 },
                  { label: "Model Optimization", value: 80 }
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-ai-primary" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </MotionSection>

        {/* SKILLS SECTION */}
        <MotionSection id="skills" className="py-32">
          <SectionHeader id="02" title="Intelligence Stack" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(99,102,241,0.5)" }}
                className="glass-card p-8 rounded-3xl group"
              >
                <div className="flex items-center space-x-4 mb-8 text-ai-primary">
                  <div className="p-3 bg-ai-primary/5 rounded-2xl group-hover:bg-ai-primary/10 transition-colors">
                    <SkillIcon icon={cat.icon} />
                  </div>
                  <h3 className="text-sm font-extrabold tracking-[0.2em] group-hover:text-white transition-colors uppercase">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/5 rounded-xl text-[11px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        {/* EXPERIENCE SECTION */}
        <MotionSection id="experience" className="py-32">
          <SectionHeader id="03" title="Experience Path" />
          <div className="space-y-12 relative max-w-5xl">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-ai-primary via-ai-secondary to-transparent ml-4 md:ml-6" />
            
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-0 top-2 ml-[13px] md:ml-[19px] w-4 h-4 rounded-full border-2 border-ai-primary bg-ai-bg z-10" />
                
                <div className="glass-card p-8 md:p-12 rounded-3xl space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white">{exp.role}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <h4 className="text-ai-primary font-bold tracking-widest text-xs uppercase">{exp.company}</h4>
                        {exp.location && (
                          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                            <MapPin size={10} className="text-ai-secondary" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white/50 border border-white/10 px-4 py-2 rounded-full uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-4 text-gray-400 text-sm md:text-md leading-relaxed">
                        <Zap size={14} className="text-ai-secondary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        {/* PROJECTS SECTION */}
        <MotionSection id="projects" className="py-32">
          <SectionHeader id="04" title="Featured Developments" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-10 md:p-14 rounded-[3rem] relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Brain size={120} className="text-ai-primary" />
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="p-4 bg-ai-primary/10 rounded-2xl w-fit">
                    <Layers size={28} className="text-ai-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-extrabold text-white group-hover:text-ai-accent transition-colors">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                       <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-lg text-ai-secondary uppercase tracking-[0.1em]">AI_AGENT</span>
                       <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-lg text-ai-accent uppercase tracking-[0.1em]">RAG_ENGINE</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {project.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-400 text-sm leading-relaxed font-light">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        {/* CONTACT SECTION */}
        <MotionSection id="contact" className="py-32 mb-20">
          <SectionHeader id="05" title="Initiate Contact" />
          <div className="glass-card p-12 md:p-24 rounded-[4rem] text-center space-y-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-ai-primary/5 via-transparent to-ai-secondary/5 pointer-events-none" />
             
             <motion.div
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="inline-flex p-4 bg-ai-primary/10 rounded-full mb-8"
             >
                <Mail size={40} className="text-ai-primary" />
             </motion.div>

             <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
               Ready to architect the next <span className="text-ai-primary">Intelligent</span> solution?
             </h2>

             <div className="space-y-8">
                <a 
                  href="mailto:porwalaashish9@gmail.com"
                  className="text-2xl md:text-5xl font-extrabold text-white hover:text-ai-secondary transition-colors block break-all"
                >
                  porwalaashish9@gmail.com
                </a>

                <div className="flex justify-center space-x-12 pt-8">
                  {[
                    { icon: <Github size={28} />, href: "https://github.com/aashishporwal1", name: "GitHub" },
                    { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/aashishporwal/", name: "LinkedIn" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -10, color: "#6366f1" }}
                      className="text-gray-500 flex flex-col items-center space-y-2"
                    >
                      {social.icon}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
             </div>
          </div>
        </MotionSection>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] gap-8">
          <div className="flex items-center space-x-3">
            <Brain size={16} className="text-ai-primary" />
            <p>© 2026 Aashish Porwal. Secured by AI Engine.</p>
          </div>
          <div className="flex space-x-12">
            <span className="hover:text-white cursor-pointer transition-colors">Neural Network Auth</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol v4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
