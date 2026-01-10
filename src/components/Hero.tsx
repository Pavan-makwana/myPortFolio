import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react';

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
              className="text-xl md:text-2xl text-[var(--text-secondary)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              React · Next.js · Node.js · APIs
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Crafting modern web applications with clean code and exceptional
              user experiences. Passionate about building scalable solutions and
              bringing ideas to life.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-full flex items-center gap-2 hover:shadow-xl hover:shadow-[var(--primary)]/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 glass text-foreground rounded-full hover:bg-muted transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
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
            {['React', 'Node.js', 'Next.js', 'MongoDB'].map((tech, i) => (
              <motion.div
                key={tech}
                className="absolute glass px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  top: `${20 + Math.sin(i * 90) * 30}%`,
                  left: `${20 + Math.cos(i * 90) * 30}%`,
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
