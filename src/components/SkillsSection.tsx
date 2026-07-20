import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layout, BrainCircuit, Wrench } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML', 'Tailwind CSS', 'React.js'],
  },
  {
    title: 'AI/ML & Data',
    icon: BrainCircuit,
    skills: [
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'RAG',
      'Vector Search',
      'Embeddings',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn',
      'Ollama',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      'MySQL',
      'Git & GitHub',
      'Jupyter Notebook',
      'VS Code',
      'Docker',
      'Kubernetes (Basics)',
      'AWS',
      'Data Structures & Algorithms',
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-card/50" ref={ref}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass-card-hover p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: groupIndex * 0.1 + index * 0.04 }}
                    className="px-3.5 py-1.5 rounded-full text-sm font-mono bg-secondary/60 text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
