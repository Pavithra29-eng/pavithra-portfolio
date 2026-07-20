import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';
import CertificatePreviewModal from './CertificatePreviewModal';

const certificates = [
  {
    id: 1,
    title: 'SQL Using AI Workshop',
    issuer: 'AI For Techies',
    instructor: '3-hour workshop',
    date: 'August 2025',
    certificatePath: '/certificates/sql-using-ai-workshop-certificate.png',
  },
  {
    id: 2,
    title: 'Developer and Technology',
    issuer: 'Accenture',
    instructor: 'SDLC, Agile/Waterfall, Debugging, STLC',
    date: 'December 2024',
    certificatePath: '/certificates/accenture-developer-technology-certificate.png',
  },
];

const CertificateCard = ({ cert, index, isInView }: { cert: typeof certificates[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card-hover group"
    >
      <div className="p-6">
        {/* Icon & Issuer */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-accent/10 text-accent">
            <Award size={24} />
          </div>
          <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary">
            {cert.issuer}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {cert.title}
        </h3>

        {/* Details */}
        <div className="space-y-1 text-sm text-muted-foreground mb-5">
          <p>Instructor: {cert.instructor}</p>
          <p>Completed: {cert.date}</p>
        </div>

        {/* Preview */}
        <CertificatePreviewModal
          title={cert.title}
          issuer={cert.issuer}
          filePath={cert.certificatePath}
          variant="icon"
        />
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-24 relative bg-secondary/30" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Certificates & <span className="gradient-text-accent">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto">
            Academic certifications and professional achievements
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
