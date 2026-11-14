import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, Languages } from 'lucide-react';

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
      role: 'Product Developer',
      company: 'DriveSync InfoTech Private Ltd.',
      location: 'Ahmedabad, India',
      period: 'Jun 2026 - Present',
      type: 'Product',
      description: 'Developing DCA (Drivesync Cyber Assistant), a cybersecurity-focused platform for UPI fraud reporting, cyber awareness, and digital insurance services.',
      achievements: [
        'Designed and implemented core product features using React Native, Expo, NestJS, Prisma, and PostgreSQL',
        'Contributed to overall product architecture, backend APIs, authentication, and user workflows',
        'Engineered secure UPI fraud reporting workflows and cybersecurity advisory modules',
        'Built scalable services ensuring real-time fraud alert reporting and seamless user workflows',
      ],
      color: 'from-blue-600 to-indigo-600',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Jorwin Advisors Private Ltd.',
      location: 'On Site',
      period: 'Jan 2026 - Mar 2026',
      type: 'Internship',
      description: 'Developed and deployed 3+ full stack web applications using React.js, Node.js, Express.js, and MySQL/MongoDB for real-world client projects.',
      achievements: [
        'Developed and deployed 3+ full stack web applications using React.js, Node.js, Express.js, and MySQL/MongoDB',
        'Built 15+ RESTful APIs, implemented JWT authentication, and developed an order lifecycle management system for an E-Commerce Operations platform',
        'Optimized database queries and improved frontend component rendering performance',
        'Collaborated in an agile environment conducting peer code reviews and sprint delivery',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      role: 'UI & UX Designer Intern',
      company: 'DriveSync InfoTech Private Ltd.',
      location: 'Ahmedabad, India',
      period: 'Nov 2025 - Dec 2025',
      type: 'Internship',
      description: 'Designed and prototyped 20+ mobile-app UI screens in Figma, including wireframes and interactive prototypes for mobile applications.',
      achievements: [
        'Designed and prototyped 20+ mobile-app UI screens in Figma',
        'Created interactive wireframes and prototypes to validate application workflows',
        'Maintained design consistency, typography standards, and color accessibility',
        'Collaborated with engineering team to ensure design fidelity during implementation',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      role: 'Flutter App Developer Intern',
      company: 'Excelerate',
      location: 'Remote',
      period: 'Oct 2025 - Nov 2025',
      type: 'Internship',
      description: 'Developed and contributed to an Education mobile application using Flutter and Firebase, working in a team-based development environment.',
      achievements: [
        'Developed and contributed to an Education mobile application using Flutter and Firebase',
        'Built 5+ app modules/screens including authentication, course listing, and user dashboard',
        'Integrated Firebase for real-time data storage and user management',
        'Collaborated in a team-based development environment to deliver high-quality mobile UI',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      role: 'Freelancer',
      company: 'Freelance / Self-Employed',
      location: 'Remote',
      period: 'Jan 2025 - Present',
      type: 'Freelance',
      description: 'Delivered 3+ client projects including GeetanjaliDairy, DriveSync, and SoulRestroCafe.',
      achievements: [
        'Delivered 3+ client projects including GeetanjaliDairy, DriveSync, and SoulRestroCafe',
        'Improved SEO ranking, mobile responsiveness, and page performance across client sites',
        'Converted diverse business requirements into scalable, clean digital solutions',
        'Managed end-to-end design, development, cloud deployment, and ongoing client support',
      ],
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  const education = {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Center for Professional Courses, Gujarat University',
    period: '2023 - 2026',
    score: 'CGPA 8.18',
  };

  const certificates = [
    { title: 'DSA in Java', issuer: 'Apna College' },
    { title: 'Full Stack Developer Course', issuer: 'Apna College' },
    { title: 'College Website Contribution Certificate', issuer: 'College Project' },
  ];

  const languages = [
    { name: 'English', level: 'Professional Working' },
    { name: 'Hindi', level: 'Native / Bilingual' },
    { name: 'Gujarati', level: 'Native' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and track record across full-stack and mobile products
          </p>
        </motion.div>

        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}-${index}`}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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
                          <Briefcase className="w-4 h-4 text-[var(--primary)]" />
                          <span className="text-sm font-medium">{exp.company}</span>
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
                          transition={{ delay: index * 0.1 + i * 0.05 }}
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
                    transition={{ delay: index * 0.15 }}
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

        {/* Education, Certifications & Languages Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Education */}
          <div className="glass p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <h4 className="font-semibold text-foreground text-base mb-1">
                {education.degree}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {education.institution}
              </p>
            </div>
            <div className="pt-4 border-t border-border/50 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{education.period}</span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full font-semibold">
                {education.score}
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.title} className="text-sm">
                    <p className="font-medium text-foreground">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="glass p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground px-2.5 py-0.5 glass rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
