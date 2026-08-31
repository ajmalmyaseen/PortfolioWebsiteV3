import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in internship opportunities, freelance projects, and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a href="https://wa.me/918086210987?text=Hi%20Ajmal" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <FaWhatsapp className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/ajmalmyaseen/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/ajmal-mohamed-yaseen/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.instagram.com/aju_m.y/?hl=en/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.facebook.com/ajmal.mohamedyaseen.7/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium group"
            onClick={() => window.open('mailto:ajmalmyaseen@gmail.com', '_self')}
          >
            Contact Me
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
