import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  color: string;
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Jorwin Advisors ',
      location: 'On Site',
      period: 'Jan 2026 - March 2026',
      type: 'Internship',
      description: 'Contributed to full-stack development projects with focus on React.js and API integration.',
      achievements: [
        'Developed React.js UI components and integrated REST APIs',
        'Assisted in debugging and improving frontend performance',
        'Collaborated in a team-based agile environment',
        'Implemented responsive designs following best practices',
      ],
      color: 'from-purple-500 to-pink-500',
    },

    {
      role: 'Web Developer (Freelance)',
      company: 'Remote',
      location: 'Remote',
      period: 'Jan 2025 - Present',
      type: 'Freelance',
      description: 'Delivering custom web solutions for clients with focus on performance, SEO, and scalability.',
      achievements: [
        'Delivered 3 client websites (GeetanjaliDairy, DriveSync, SoulRestoCafe)',
        'Improved SEO, responsiveness, and page performance',
        'Converted client requirements into scalable solutions',
        'Maintained ongoing support and updates for client projects',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Cognifyz Technologies',
      location: 'Remote',
      period: 'Dec 2025 - Jan 2026',
      type: 'Internship',
      description: 'Contributed to full-stack development projects with focus on React.js and API integration.',
      achievements: [
        'Developed React.js UI components and integrated REST APIs',
        'Assisted in debugging and improving frontend performance',
        'Collaborated in a team-based agile environment',
        'Implemented responsive designs following best practices',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      role: 'Flutter App Development Intern',
      company: 'Excelerate',
      location: 'Remote',
      period: 'Oct 2025 - Nov 2025',
      type: 'Internship',
      description: 'Built features for StudySync learning app with focus on user experience and functionality.',
      achievements: [
        'Built features for StudySync learning app including course discovery and progress tracking',
        'Implemented goal-setting and resource-sharing modules',
        'Contributed to clean, user-friendly UI using Flutter',
        'Enhanced app performance and user engagement',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      role: 'Frontend Contributor',
      company: 'College Website Project',
      location: 'On-site',
      period: 'Jan 2024 - Feb 2024',
      type: 'Project',
      description: 'Contributed to React-based college website development with focus on faculty management.',
      achievements: [
        'Developed Faculty Page for React-based college website',
        'Built responsive layouts & dynamic rendering',
        'Improved UI/UX & content management',
        'Collaborated with team on code reviews and optimization',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and milestones in web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Left/Right content based on index */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}>
                  <motion.div
                    className="glass p-8 rounded-2xl hover:shadow-2xl transition-all group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-3`}>
                        {exp.type}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground flex-wrap justify-start md:justify-end">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 text-left">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} relative z-10`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-ping" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:order-1'} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}