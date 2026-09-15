import { motion } from 'framer-motion';
import { ArrowRight, Code2, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const portraitImage = '/images/AJMAL.jpg';
const heroPatternImage = '/images/hero-bg.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050b1a]">
      <img
        src={heroPatternImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),_transparent_34%)]" />
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-primary text-lg font-medium inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_0_30px_rgba(124,58,237,0.12)]"
            >
              <span>👋</span>
              <span>Hi, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-display font-bold mb-4 leading-[0.9]"
            >
              Ajmal Mohamed
              <br />
              <span className="gradient-text">Yaseen</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-16 flex items-center mb-6"
            >
              <Code2 className="w-6 h-6 text-primary mr-3" />
              <span className="text-2xl lg:text-3xl font-medium text-foreground">
                Aspiring Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              I build responsive, modern and user-friendly websites and web applications using HTML, CSS, Bootstrap and JavaScript while continuously learning React and Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium group shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                onClick={() => scrollToSection('projects')}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 bg-white/3 hover:bg-primary/10 shadow-[0_0_25px_rgba(59,130,246,0.14)]"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="https://wa.me/918086210987?text=Hi%20Ajmal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/60 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group backdrop-blur-sm"
                aria-label="Chat on WhatsApp"
                data-testid="link-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/ajmalmyaseen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/60 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group backdrop-blur-sm"
                data-testid="link-github"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ajmal-mohamed-yaseen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/60 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group backdrop-blur-sm"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/aju_m.y/?hl=en/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/60 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group backdrop-blur-sm"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/ajmal.mohamedyaseen.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/60 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group backdrop-blur-sm"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[min(82vw,540px)] aspect-square rounded-full border border-primary/40 bg-[#0d1b2a]/80 p-3 shadow-[0_0_80px_rgba(117,82,255,0.25)]">
              <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),_rgba(15,23,42,0.1)_52%,_rgba(15,23,42,0.9)_100%)]" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-900/60 shadow-[inset_0_0_40px_rgba(15,23,42,0.7)]">
                <img
                  src={portraitImage}
                  alt="Ajmal Mohamed Yaseen"
                  className="h-full w-full object-cover object-center scale-[1.08] grayscale-[0.2] contrast-[1.1]"
                  style={{ filter: 'brightness(0.96) saturate(0.9)' }}
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[82%] rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_14px_45px_rgba(15,23,42,0.7)] backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-auto text-xs text-muted-foreground">developer.js</span>
                </div>

                <pre className="overflow-hidden text-left font-mono text-xs leading-6 text-slate-200">
                  <code>{`const developer = {
  name: "Ajmal Mohamed Yaseen",
  role: "Frontend Developer",
  skills: ["HTML5", "CSS3", "JavaScript"],
  learning: ["Next.js", "TypeScript"],
  availableForWork: true,
};`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
