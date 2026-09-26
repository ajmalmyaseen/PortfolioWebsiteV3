import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website v2',
    description: 'A modern and responsive personal portfolio website showcasing my skills, projects, and professional profile with a clean and interactive user interface.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/PortfolioWebsiteV2',
  },
  {
    id: 2,
    title: 'Country CRUD',
    description: 'A React-based CRUD application for managing country data, allowing users to create, view, update, and delete country records through an interactive interface.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    tags: ['React', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/country-crud',
  },
  {
    id: 3,
    title: 'Secure Auth',
    description: 'A secure authentication system built with React, featuring user registration, login functionality, form validation, and protected access to application pages.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop',
    tags: ['React', 'JavaScript', 'SCSS'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/secure-auth',
  },
  {
    id: 4,
    title: 'Portfolio Website v3',
    description: 'A personal portfolio website designed to showcase my projects, technical skills, education, and contact information with a responsive and visually engaging layout.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/PortfolioWebsiteV3',
  },
  {
    id: 5,
    title: 'Portfolio Website v1',
    description: 'My first personal portfolio website, created to present my profile, technical skills, projects, and contact details through a simple and responsive web design.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/PortfolioWebsite',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative overflow-hidden py-28 lg:py-36" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.07),transparent_28rem)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-300/75">03 / Selected Work</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
              Built with <span className="gradient-text">purpose.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400 md:text-right">
            A selection of projects showcasing my approach to responsive interfaces, practical development, and continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => {
            const featured = index === 0 || index === 1;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={featured ? 'group relative lg:col-span-6' : 'group relative lg:col-span-4'}
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] shadow-[0_25px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-sky-400/25">
                  <div className={featured ? 'relative h-64 overflow-hidden sm:h-72' : 'relative h-52 overflow-hidden'}>
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover opacity-45 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,11,0.04)_20%,rgba(3,6,11,0.96)_100%)]" />
                    <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.2em] text-slate-500">
                      0{index + 1}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={'Open ' + project.title + ' on GitHub'}
                      className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-slate-300 backdrop-blur-md transition hover:border-sky-400/30 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">{project.title}</h3>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-sky-300" />
                    </div>
                    <p className="line-clamp-3 text-sm leading-6 text-slate-400">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.demoUrl !== '#' && (
                      <Button asChild size="sm" className="mt-6 rounded-full bg-white text-slate-950 hover:bg-slate-100">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
