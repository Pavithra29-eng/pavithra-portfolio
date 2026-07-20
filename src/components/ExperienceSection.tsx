import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import CertificatePreviewModal from './CertificatePreviewModal';

const experiences = [
  {
    id: 1,
    role: 'AIML Intern',
    company: 'Oneture Technologies',
    location: 'Navi Mumbai, India',
    date: 'Dec 2025 - Jan 2026',
    highlights: [
      'Developed a high-performance Supplier Profile Dashboard using React.js.',
      'Optimized low-level networking protocols using C++ and Rust to improve data-handling efficiency.',
      'Integrated pre-trained ML models into the platform for automated data classification.',
      'Engineered scalable system pipelines, optimizing model inference speed and preparing infrastructure for future AI/ML deployment.',
    ],
    certificatePath: '/certificates/oneture-technologies-certificate.png',
  },
  {
    id: 2,
    role: 'Web Developer Intern',
    company: 'Vault-Tech Security',
    location: 'Navi Mumbai, India',
    date: 'Jan 2025',
    highlights: [
      'Built a responsive frontend (HTML, CSS, JavaScript) for a Subscription Management System.',
      'Worked on backend features including authentication, subscription tracking, and payment integration, and managed the underlying database.',
      'Integrated APIs and supported deployment of a secure, user-friendly system.',
    ],
    certificatePath: '/certificates/vault-tech-security-certificate.png',
  },
  {
    id: 3,
    role: 'Frontend Developer Intern',
    company: 'IIT Bombay',
    location: 'Mumbai, India',
    date: 'Feb 2024 - Mar 2024',
    highlights: [
      'Developed a solution to simplify programming error messages and technical keywords for beginner programmers.',
      'Contributed to an AI chatbot integration aimed at making technical content more accessible than existing tools like Google Translate.',
    ],
    certificatePath: '/certificates/iit-bombay-certificate.png',
  },
];

const ExperienceCard = ({
  exp,
  index,
  isInView,
  isLast,
}: {
  exp: typeof experiences[0];
  index: number;
  isInView: boolean;
  isLast: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline dot + line */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(270_91%_65%/0.6)]" />
      {!isLast && (
        <div className="absolute left-[5px] top-5 w-px bottom-[-2.5rem] bg-border" />
      )}

      <div className="glass-card-hover p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
            <Briefcase className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
            <p className="text-primary text-sm font-medium">{exp.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4 font-mono">
          <span className="flex items-center gap-1">
            <Calendar size={13} /> {exp.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={13} /> {exp.location}
          </span>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="max-w-xs">
          <CertificatePreviewModal
            title={`${exp.role} Certificate`}
            issuer={exp.company}
            filePath={exp.certificatePath}
          />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Internships that shaped how I build things
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isInView={isInView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
