import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket, Heart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Focus',
    description: 'Building responsive, modern and user-friendly web interfaces.',
  },
  {
    icon: Sparkles,
    title: 'React Learner',
    description: 'Continuously improving with modern React and UI patterns.',
  },
  {
    icon: Rocket,
    title: 'Real Projects',
    description: 'Turning ideas into practical solutions through hands-on learning.',
  },
  {
    icon: Heart,
    title: 'User Experience',
    description: 'Designing experiences that feel clean, accessible, and engaging.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Passionate Frontend Developer <span className="gradient-text">& React Learner</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
              My Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I&apos;m <strong>Ajmal Mohamed Yaseen</strong>, an aspiring Full Stack Developer passionate about creating responsive, modern and user-friendly web applications.
              </p>
              <p>
                I enjoy turning ideas into beautiful digital experiences using HTML5, CSS3, JavaScript, Bootstrap, React and Java. I continuously improve my skills by building real-world projects and learning new technologies.
              </p>
              <p>
                <span className="font-semibold text-foreground">Location:</span> Chettuva, Orumanayoor, Kerala, India
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
