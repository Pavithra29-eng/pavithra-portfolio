import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, ArrowUp } from 'lucide-react';


const socialLinks = [
  { icon: Github, href: 'https://github.com/Pavithra29-eng', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pavithra-lokesh-m-547697373/', label: 'LinkedIn' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border text-center">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-6">

        {/* Name and copyright */}
        <div className="flex flex-col items-center gap-2">
          <a href="#home" className="text-2xl font-bold gradient-text">
            Pavithra Lokesh
          </a>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} • Built with{' '}
            <Heart size={14} className="text-red-500 fill-red-500" /> using React
            <motion.button
              onClick={scrollToTop}
              className="ml-2 p-1 text-muted-foreground hover:text-primary transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
