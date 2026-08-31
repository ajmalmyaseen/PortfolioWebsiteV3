import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiBootstrap, SiSass, SiGit, SiNextdotjs, SiFigma, SiNpm, SiGithub } from 'react-icons/si';
import { Code2 } from 'lucide-react';

function VsCodeIcon({ style }: { style?: React.CSSProperties }) {
  return <Code2 style={{ width: 64, height: 64, ...style }} />;
}

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#00D4FF' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#00D4FF' },
      { name: 'VS Code', icon: VsCodeIcon, color: '#007ACC' },
      { name: 'NPM', icon: SiNpm, color: '#CB3837' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A constellation of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className="group relative"
                  >
                    {/* Skill card */}
                    <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                      {/* Glow on hover */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                        style={{ background: `${skill.color}20` }}
                      />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <skill.icon 
                            className="w-16 h-16 mx-auto" 
                            style={{ color: skill.color }}
                          />
                        </div>

                        {/* Name */}
                        <h4 className="font-semibold mb-2">{skill.name}</h4>

                        {/* Proficiency ring removed */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <p className="text-lg text-muted-foreground mb-2">Currently Learning</p>
            <p className="text-2xl font-bold gradient-text">
              TypeScript • Advanced React Patterns • Server Components
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
