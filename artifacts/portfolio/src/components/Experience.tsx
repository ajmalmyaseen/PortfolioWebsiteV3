import { motion, useInView } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, BookOpen, Code2 } from 'lucide-react';
import { useRef } from 'react';

const education = [
  {
    icon: GraduationCap,
    title: 'BTech in Computer Science',
    place: 'NEFTU (North East Frontier Technical University)',
    detail: 'In progress',
  },
  {
    icon: BookOpen,
    title: 'ACCA',
    place: 'Eagles Institute of Management, Valanchery',
    detail: 'Skill Level',
  },
];

const experience = [
  {
    icon: BriefcaseBusiness,
    title: 'Python Internship',
    place: 'Internship',
    detail: '1 Month',
  },
  {
    icon: Code2,
    title: 'Personal Projects',
    place: 'Web applications and development projects',
    detail: 'Hands-on learning',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative overflow-hidden py-28 lg:py-36" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(56,189,248,0.06),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.06),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-300/75">04 / Experience</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
              My <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">
            A snapshot of my academic path, internship experience, and practical learning through personal projects.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {[{ title: 'Education', items: education }, { title: 'Experience', items: experience }].map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: columnIndex * 0.12 }}
              className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8"
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.06] text-sky-300">
                  {columnIndex === 0 ? <GraduationCap className="h-5 w-5" /> : <BriefcaseBusiness className="h-5 w-5" />}
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">Timeline</p>
                  <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                </div>
              </div>

              <div className="relative ml-2 border-l border-white/10 pl-7">
                {column.items.map((item, index) => (
                  <div key={item.title} className={index === column.items.length - 1 ? 'relative' : 'relative pb-9'}>
                    <span className="absolute -left-[34px] top-1 h-2.5 w-2.5 rounded-full border-2 border-sky-300 bg-[#07101b] shadow-[0_0_12px_rgba(56,189,248,0.45)]" />
                    <div className="flex gap-4">
                      <div className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.035] text-slate-400 sm:flex">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-400">{item.place}</p>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-sky-300/70">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
