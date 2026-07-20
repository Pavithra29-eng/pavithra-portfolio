import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import smartbuddyImg from '@/assets/SmartBuddy.png';
import preppulseImg from '@/assets/PrepPulse.png';
import cppchatcoreImg from '@/assets/C++ChatCore.png';
import codemitraImg from '@/assets/CodeMitra.png';

const projects = [
  {
    id: 1,
    title: 'SmartBuddy',
    description:
      "A private AI search engine and chatbot built from scratch in Python, implementing and comparing Brute Force, KD-Tree, and HNSW algorithms for vector retrieval, with local RAG-powered document Q&A using Ollama for offline, privacy-first search.",
    techStack: ['Python', 'RAG', 'LLMs', 'Vector Search', 'Ollama', 'KD-Tree', 'HNSW'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Pavithra29-eng/SmartBuddy',
    liveUrl: null,
    image: smartbuddyImg,
    featured: true,
  },
  {
    id: 2,
    title: 'PrepPulse',
    description:
      "A full-stack web application that generates personalized interview preparation plans and tailored resumes using Gemini 2.5 Flash, based on a user's resume and target job description. Built and deployed the frontend, backend, and database.",
    techStack: ['Gemini 2.5 Flash', 'React.js', 'Tailwind CSS', 'SCSS', 'Backend', 'Database', 'API Integration'],
    category: 'AI/ML',
    githubUrl: null,
    liveUrl: 'https://preppulse-mu.vercel.app',
    image: preppulseImg,
    featured: false,
  },
  {
    id: 3,
    title: 'C++ChatCore',
    description:
      'A multi-user real-time chat server built from scratch in C++ using raw socket programming (Winsock2), supporting user registration, authentication, and instant messaging.',
    techStack: ['C++', 'Winsock2', 'Networking', 'SQLite3'],
    category: 'Systems',
    githubUrl: 'https://github.com/Pavithra29-eng/Cpp-Winsock-Chat-Application',
    liveUrl: null,
    image: cppchatcoreImg,
    featured: false,
  },
  {
    id: 4,
    title: 'CodeMitra',
    description:
      'A multilingual programming error-explanation tool that translates confusing error messages into simple, native-language explanations for beginner programmers from rural and non-English-speaking backgrounds.',
    techStack: ['Python', 'Streamlit', 'Regex', 'Generative AI', 'LLMs', 'NLP'],
    category: 'AI/ML',
    githubUrl: null,
    liveUrl: 'https://codemitra.streamlit.app',
    image: codemitraImg,
    featured: false,
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const primaryLink = project.liveUrl || project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass-card-hover group flex flex-col ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Project Header */}
      <div className="relative p-6 pb-0">
        <div className="h-48 md:h-56 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-4 flex-wrap">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Primary CTA - jumps directly to the live project or repo */}
        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: 'var(--gradient-primary)', color: 'hsl(var(--primary-foreground))' }}
          >
            <span>{project.liveUrl ? 'View Live Project' : 'View on GitHub'}</span>
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-muted/30" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Showcasing my work and what I've built
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === cat
                  ? 'text-primary-foreground shadow-[0_0_20px_hsl(270_91%_65%/0.4)]'
                  : 'text-muted-foreground glass-card hover:text-foreground'
                }`}
              style={activeFilter === cat ? { background: 'var(--gradient-primary)' } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
