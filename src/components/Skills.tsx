import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Layers,
  GitBranch,
  Smartphone,
  Cloud,
  LucideIcon
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}

interface AdditionalSkill {
  icon: LucideIcon;
  label: string;
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js',
        'Next.js',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'TailwindCSS',
        'Redux',
        'Framer Motion',
        'Responsive Design'
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Authentication',
        'WebSockets',
        'API Integration',
        'Microservices'
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'Firebase',
        'Prisma ORM',
        'Database Design',
        'Query Optimization'
      ],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        'Git & GitHub',
        'Docker',
        'AWS',
        'Vercel',
        'CI/CD',
        'Jest & Testing',
        'Figma',
        'Postman'
      ],
    },
  ];

  const additionalSkills: AdditionalSkill[] = [
    { icon: Layers, label: 'Full Stack Development' },
    { icon: GitBranch, label: 'Version Control' },
    { icon: Smartphone, label: 'Responsive Design' },
    { icon: Cloud, label: 'Cloud Deployment' },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Main skill categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass rounded-2xl p-8 hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {additionalSkills.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-5 h-5 text-[var(--primary)]" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '5+', label: 'Happy Clients' },
            { number: '20+', label: 'Technologies' },
            { number: '2+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
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
    </section>
  );
}
