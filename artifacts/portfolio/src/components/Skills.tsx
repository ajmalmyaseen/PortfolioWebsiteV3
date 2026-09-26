import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiBootstrap, SiSass, SiGit, SiNextdotjs, SiFigma, SiGithub } from 'react-icons/si';
import { Code2, Database, Layers3, Wrench } from 'lucide-react';

function VsCodeIcon({ style }: { style?: React.CSSProperties }) {
  return <Code2 style={{ width: 42, height: 42, ...style }} />;
}

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers3,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#f8fafc' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#f8fafc' },
      { name: 'VS Code', icon: VsCodeIcon, color: '#007ACC' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative overflow-hidden py-28 lg:py-36" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(56,189,248,0.055),transparent_25rem)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-300/75">02 / Capabilities</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
              Tools I <span className="gradient-text">work with.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">
            A practical toolkit spanning frontend development, modern frameworks, design tools, and the workflow behind my projects.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: categoryIndex * 0.1 }}
                className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.06] text-sky-300">
                    <CategoryIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">Stack</p>
                    <h3 className="text-base font-semibold text-white">{category.title}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/10 px-4 py-3 transition hover:border-white/[0.12] hover:bg-white/[0.035]"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5" style={{ color: skill.color }} />
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                        </div>
                        <span className="font-mono text-[9px] text-slate-600 transition group-hover:text-slate-400">01</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-5 flex flex-col gap-4 rounded-3xl border border-sky-400/10 bg-sky-400/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-sky-300" />
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">Learning next</p>
              <p className="mt-1 text-sm text-slate-200">TypeScript • Advanced React Patterns • Server Components</p>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sky-300/60">Always learning</span>
        </motion.div>
      </div>
    </section>
  );
}
