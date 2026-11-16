import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Download, Phone } from 'lucide-react';

export function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Pavan-makwana',
      color: 'hover:text-[#333]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pavan-makwana-05062oo6/',
      color: 'hover:text-[#0077B5]',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:pavan561981@gmail.com',
      color: 'hover:text-[var(--accent-cyan)]',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+916353394638',
      color: 'hover:text-green-500',
    },
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent)]/5 pointer-events-none" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hello badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Code2 className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm text-muted-foreground">
              Based in Ahmedabad, India
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              FULL STACK
              <br />
              <span className="bg-gradient-to-r from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)] bg-clip-text text-transparent">
                DEVELOPER
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack & Product Developer
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-[var(--primary)] font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              Next.js · React Native · Node.js · NestJS · PostgreSQL
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Focused on building scalable web applications, SaaS products, and
              mobile solutions using Next.js, React, Node.js, NestJS, and modern
              databases. Experienced in taking products from idea to implementation
              with expertise in APIs, authentication, and modern UI.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-full flex items-center gap-2.5 font-semibold text-sm md:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border border-indigo-400/40 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full flex items-center gap-2.5 font-semibold text-sm md:text-base text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 shadow-md shadow-cyan-500/15 hover:shadow-cyan-500/30 backdrop-blur-md transition-all cursor-pointer group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="px-7 py-3.5 rounded-full flex items-center gap-2.5 font-semibold text-sm md:text-base text-white bg-white/10 hover:bg-white/15 border border-white/25 hover:border-white/40 shadow-md backdrop-blur-md transition-all cursor-pointer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass rounded-full transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right side - 3D Avatar placeholder */}
        <motion.div
          className="relative hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Floating avatar container */}
          <motion.div
            className="relative w-full max-w-md aspect-square"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full blur-3xl opacity-30" />
            
            {/* Avatar circle */}
            <div className="relative w-full h-full glass rounded-full flex items-center justify-center overflow-hidden">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px),
                                   linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }} />
              </div>

              {/* Code symbol */}
              <motion.div
                className="text-9xl font-bold text-[var(--primary)] opacity-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                &lt;/&gt;
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[var(--accent)] rounded-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10 - i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: -6,
                    marginTop: -6,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      transform: `translateX(${120 + i * 20}px)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Floating tech badges */}
            {['Next.js', 'React Native', 'NestJS', 'PostgreSQL', 'Prisma'].map((tech, i) => (
              <motion.div
                key={tech}
                className="absolute glass px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  top: `${20 + Math.sin((i * 2 * Math.PI) / 5) * 32}%`,
                  left: `${20 + Math.cos((i * 2 * Math.PI) / 5) * 32}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
