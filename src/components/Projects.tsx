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
      description: 'A comprehensive personal finance management application with budget tracking, expense categorization, and visual analytics.',
      image: 'https://images.unsplash.com/photo-1748609278627-4b0e483b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2ODAzNDI1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Node.js', 'Supabase', 'Chart.js'],
      github: 'https://github.com/Pavan-makwana/Finance_Tracker_P-1',
      demo: 'https://finance-tracker-pa1.vercel.app/',
    },
    {
      title: 'Zerodha Clone',
      description: 'A modern trading platform clone featuring real-time stock data, portfolio management, and trading simulation.',
      image: 'https://images.unsplash.com/photo-1766218334217-d2cc74c36fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHRyYWRpbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjgwNTQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'WebSocket'],
      github: 'https://github.com/Pavan-makwana/Zerodha-Clone-pa1',
      demo: 'https://zerodha-clone-frontend-pa1.vercel.app/',
    },
  ];

  const clientProjects: Project[] = [
    {
      title: 'DriveSync',
      description: 'Cloud storage and file synchronization platform with real-time collaboration features and secure file sharing.',
      image: 'https://images.unsplash.com/photo-1611722341858-acb609fb3d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHN0b3JhZ2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MDU0OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: 'https://drivesync.tech/',
    },
    {
      title: 'Geetanjali Dairy',
      description: 'E-commerce platform for dairy products with inventory management, order tracking, and customer portal.',
      image: 'https://images.unsplash.com/photo-1762965619729-289a23a4ec8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMGZhcm0lMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjgwNTQ5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: 'https://geetanjalidairy.com/',
    },
    {
      title: 'SoulRestoCafe',
      description: 'Modern restaurant website with online ordering, table reservations, and menu management system.',
      image: 'https://images.unsplash.com/photo-1551530078-379240770349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODA1NDk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      github: '#',
      demo: 'https://soulrestrocafe.com/',
    },
  ];

  const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
    <motion.div
      className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
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
        
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-muted transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:shadow-lg transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
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
            A collection of my personal experiments and client work showcasing
            modern web development
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
              Personal Projects
            </motion.h3>
            
            {onViewAllProjects && (
              <motion.button
                onClick={onViewAllProjects}
                className="flex items-center gap-2 px-6 py-2 glass rounded-full hover:bg-muted transition-all text-sm font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View more projects
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
            Client & Freelance Projects
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