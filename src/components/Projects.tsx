import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectsProps {
  onViewAllProjects?: () => void;
}

export function Projects({ onViewAllProjects }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const personalProjects: Project[] = [
    {
      title: 'Finance Tracker',
      description: 'Built a full-stack finance tracking SaaS with authentication, analytics dashboard, 10+ CRUD operations, and real-time data sync using Supabase.',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=L4d5P81GijVgU4u1yJtFLVsIqATkfWTrymEPSd_C6_o',
      tech: ['Next.js', 'Prisma', 'Supabase', 'TailwindCSS'],
      github: 'https://github.com/Pavan-makwana/Finance_Tracker_P-1',
      demo: 'https://finance-tracker-pa1.vercel.app/',
    },
    {
      title: 'Zerodha Clone',
      description: 'Built a stock trading simulation app featuring real-time data visualization, 5+ trading modules, RESTful APIs, and user portfolio tracking.',
      image: 'https://www.beleaftechnologies.com/static/media/dev-img-six.53e2896c3a7443267114.webp',
      tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'WebSocket'],
      github: 'https://github.com/Pavan-makwana/Zerodha-Clone-pa1',
      demo: 'https://zerodha-clone-frontend-pa1.vercel.app/',
    },
  ];

  const clientProjects: Project[] = [
    {
      title: 'DriveSync',
      description: 'Cybersecurity-focused and IT solutions platform for UPI fraud reporting, cyber awareness, and digital insurance services.',
      image: 'https://drivesyncinfotech.com/Img/logo.webp',
      tech: ['React Native', 'Expo', 'NestJS', 'PostgreSQL'],
      github: 'https://github.com/Pavan-makwana',
      demo: 'https://drivesyncinfotech.com/',
    },
    {
      title: 'Geetanjali Dairy',
      description: 'E-commerce platform for dairy products with inventory management, order tracking, and customer portal.',
      image: 'https://geetanjalidairy.com/img/logo.webp',
      tech: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Pavan-makwana',
      demo: 'https://geetanjalidairy.com/',
    },
    {
      title: 'SoulRestroCafe',
      description: 'Modern restaurant website with online ordering, table reservations, and menu management system.',
      image: 'https://soulrestrocafe.com/img/logo.png',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Pavan-makwana',
      demo: 'https://soulrestrocafe.com/',
    },
  ];

  const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
    <motion.div
      className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all group flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div>
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = '0';
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 pb-2">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 glass border border-border/80 rounded-xl hover:bg-muted transition-all text-sm font-medium text-foreground whitespace-nowrap shadow-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-md shadow-indigo-500/25 transition-all text-sm font-semibold whitespace-nowrap"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my SaaS products, full stack systems, and client solutions
          </p>
        </motion.div>

        {/* Personal Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <motion.h3
              className="text-2xl font-bold flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-8 bg-[var(--accent)] rounded-full" />
              SaaS & Personal Projects
            </motion.h3>
            
            {onViewAllProjects && (
              <motion.button
                onClick={onViewAllProjects}
                className="flex items-center gap-2 px-6 py-2.5 glass border border-border/80 rounded-full hover:bg-muted hover:border-[var(--primary)] transition-all text-sm font-semibold text-foreground shadow-sm whitespace-nowrap cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View more projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Client Projects */}
        <div>
          <motion.h3
            className="text-2xl font-bold mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="w-2 h-8 bg-[var(--primary)] rounded-full" />
            Client & Production Projects
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {clientProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={0.6 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
