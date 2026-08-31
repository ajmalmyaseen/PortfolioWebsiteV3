import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
 {
   id: 1,
   title: 'Python Full Stack Development',
   issuer: 'Inmakes',
   date: '2023',
   description: 'Completed comprehensive training in Python full-stack development, covering backend development, web technologies, databases, and building dynamic web applications.',
   credentialUrl: null,
   logo: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
 },
 {
   id: 2,
   title: 'Java Boot Camp',
   issuer: 'Lets Upgrade',
   date: '2023',
   description: 'Completed intensive training in Java programming, covering core Java concepts, object-oriented programming, problem-solving, and fundamental software development principles.',
   credentialUrl: null,
   logo: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
 },
 {
   id: 3,
   title: 'Data Analytics Job Simulation',
   issuer: 'Deloitte',
   date: '2024',
   description: 'Completed a Deloitte data analytics job simulation, gaining practical experience in data analysis, data visualization, business insights, and presenting data-driven solutions.',
   credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a2968bfbf55d0944bec9d91_1781101573379_completion_certificate.pdf',
   logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
 },
];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through recognized certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Certificate card */}
              <div className="relative h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Image/Logo area */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Award icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">{cert.date}</span>
                   {cert.credentialUrl ? (
                     <Button
                       size="sm"
                       variant="outline"
                       className="border-primary/30 hover:bg-primary/10"
                       asChild
                     >
                       <a
                         href={cert.credentialUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         data-testid={`link-credential-${cert.id}`}
                       >
                         View Certificate
                         <ExternalLink className="w-3 h-3 ml-2" />
                       </a>
                     </Button>
                   ) : (
                     <Button
                       size="sm"
                       variant="outline"
                       className="border-border/80 opacity-60 cursor-not-allowed pointer-events-none"
                       disabled
                     >
                       View Certificate
                     </Button>
                   )}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Certificates', value: '6+' },
            { label: 'Hours Learning', value: '500+' },
            { label: 'Technologies', value: '12+' },
            { label: 'Projects Built', value: '15+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-card/50 to-card border border-border"
            >
              <div className="text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
