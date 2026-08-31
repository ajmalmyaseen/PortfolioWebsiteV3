import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website v2',
    description:
      'A modern and responsive personal portfolio website showcasing my skills, projects, and professional profile with a clean and interactive user interface.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/PortfolioWebsiteV2',
    featured: true,
  },
  {
    id: 2,
    title: 'Country CRUD',
    description:
      'A React-based CRUD application for managing country data, allowing users to create, view, update, and delete country records through an interactive interface.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/country-crud',
    featured: true,
  },
  {
    id: 3,
    title: 'Secure Auth',
    description:
      'A secure authentication system built with React, featuring user registration, login functionality, form validation, and protected access to application pages.',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    tags: ['React', 'JavaScript', 'SCSS'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/secure-auth',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website v3',
    description:
      'A personal portfolio website designed to showcase my projects, technical skills, education, and contact information with a responsive and visually engaging layout.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/PortfolioWebsiteV3',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website v1',
    description:
      'My first personal portfolio website, created to present my profile, technical skills, projects, and contact details through a simple and responsive web design.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ajmalmyaseen/PortfolioWebsite',
    featured: false,
  },
];
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in creating responsive, modern, and user-friendly web experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium">
                    Featured
                  </div>
                )}
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-demo-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-github-${project.id}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
