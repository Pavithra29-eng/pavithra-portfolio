import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Zap, Target, Heart, Code } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const aboutItems = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.E. in Computer Engineering at SIES GST, Navi Mumbai (2022 - 2026).',
  },
  {
    icon: Zap,
    title: 'Strengths',
    description: 'Fast learner, consistent, and skilled at turning ideas into clean, working interfaces.',
  },
  {
    icon: Target,
    title: 'Goals',
    description: 'Grow into a strong AI/ML engineer who builds complete, real-world products.',
  },
  {
    icon: Heart,
    title: 'Interests',
    description: 'Exploring new tech, RAG systems, and improving a little every day.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 animate-pulse-glow" />

              <div className="relative glass-card p-2 rounded-full">
                <img
                  src={profilePhoto}
                  alt="Pavithra Lokesh"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hi, I'm Pavithra — a Computer Engineering graduate who loves building things that
              actually work.I mainly build AI-powered apps using RAG, LLMs, and vector search,
              and pair that with clean, responsive frontends in React and Tailwind CSS. I've
              built end-to-end projects so far, interned across AI/ML and web development,
              and I am passionate about learning through practical projects and continuously improving my technical skills.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card-hover p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
