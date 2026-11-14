import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectsPageProps {
  onBack: () => void;
}

export function ProjectsPage({ onBack }: ProjectsPageProps) {
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
    {
      title: "Pa1's Music Player",
      description: 'A React-based music player that provides a clean and distraction-free playlist listening experience with smooth controls and responsive UI.',
      image: 'https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg',
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Pavan-makwana/Playlist-App',
      demo: 'https://playlist-app-pa1.vercel.app/',
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
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
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
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)] bg-clip-text text-transparent">
              Personal Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my personal experiments and passion projects built with modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { number: `${personalProjects.length}+`, label: 'Personal Projects' },
            { number: '10K+', label: 'Lines of Code' },
            { number: '100%', label: 'Open Source' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-8 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
