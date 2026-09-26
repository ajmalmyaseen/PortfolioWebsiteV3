import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const portraitImage = '/images/AJMAL.png';
const heroPatternImage = '/images/hero-bg.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#03060b]">
      <img
        src={heroPatternImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(56,189,248,0.14),transparent_28%),linear-gradient(90deg,rgba(3,6,11,0.98)_0%,rgba(3,6,11,0.88)_38%,rgba(3,6,11,0.35)_72%,rgba(3,6,11,0.82)_100%)]" />
      <div className="absolute inset-0 grid-background opacity-25" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-sky-300/80">
              <span className="h-px w-10 bg-sky-400/60" />
              Portfolio / 2026
            </div>

            <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="font-display text-[clamp(3.5rem,8vw,7.2rem)] font-bold leading-[0.82] tracking-[-0.07em] text-white">
              AJMAL
              <br />
              <span className="gradient-text">MOHAMED YASEEN</span>
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.8)]" />
              <p className="text-lg font-medium text-slate-200 sm:text-xl">
                Aspiring Developer
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build responsive, modern and user-friendly websites and web applications using HTML, CSS, Bootstrap and JavaScript while continuously learning React and Next.js.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-6 font-semibold text-slate-950 shadow-[0_12px_35px_rgba(255,255,255,0.10)] hover:bg-slate-100"
                onClick={() => scrollToSection('projects')}
              >
                Explore Projects
                <ArrowDownRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-slate-200 hover:bg-white/[0.07]"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="mt-9 flex items-center gap-2">
              {[
                { href: 'https://github.com/ajmalmyaseen/', label: 'GitHub', icon: Github },
                { href: 'https://www.linkedin.com/in/ajmal-mohamed-yaseen/', label: 'LinkedIn', icon: Linkedin },
                { href: 'mailto:ajmalmyaseen@gmail.com', label: 'Email', icon: Mail },
                { href: 'https://wa.me/918086210987?text=Hi%20Ajmal', label: 'WhatsApp', icon: FaWhatsapp },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-400 transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="absolute -inset-10 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-2 shadow-[0_40px_100px_rgba(0,0,0,0.55)] backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-slate-900">
                <img
                  src={portraitImage}
                  alt="Ajmal Mohamed Yaseen"
                  className="h-full w-full object-cover object-center grayscale-[0.12] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(2,6,12,0.88)_100%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300/70">Currently building</p>
                      <p className="mt-1 text-sm font-medium text-white">Web applications & digital projects</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[10px] text-slate-300">
                      01 / 01
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#07101b]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-medium text-slate-100">Frontend · React · Next.js</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500 md:flex">
        <span>Scroll to explore</span>
        <span className="h-px w-8 bg-slate-700" />
      </div>
    </section>
  );
}
