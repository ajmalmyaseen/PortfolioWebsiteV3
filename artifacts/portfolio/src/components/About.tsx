import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, title: 'BTech', detail: 'In progress' },
  { icon: Sparkles, title: 'ACCA', detail: 'Skill Level' },
  { icon: Code2, title: 'Web Development', detail: 'React · Next.js' },
  { icon: BarChart3, title: 'Data & Analytics', detail: 'Excel · SQL · Python' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-36" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(99,102,241,0.06),transparent_25rem)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-300/75">01 / About</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
              Turning ideas into <span className="gradient-text">practical solutions.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">
            I&apos;m Ajmal Mohamed Yaseen, an aspiring Full Stack Developer passionate about creating responsive, modern and user-friendly web applications.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">Profile</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">Learning by building.</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-600" />
            </div>

            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-400">
              <p>
                I enjoy turning ideas into beautiful digital experiences using HTML5, CSS3, JavaScript, Bootstrap, React and Java.
              </p>
              <p>
                I continuously improve my skills by building real-world projects and learning new technologies.
              </p>
              <div className="border-t border-white/[0.07] pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Location</p>
                <p className="mt-1 text-slate-200">Chettuva, Orumanayoor, Kerala, India</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                  className="group rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-sky-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[9px] text-slate-600">0{index + 1}</span>
                  </div>
                  <h4 className="mt-7 text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
