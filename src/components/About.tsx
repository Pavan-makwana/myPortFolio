import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Efficient development workflow with timely project completion',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Understanding requirements and exceeding expectations',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards and modern development patterns',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Full Stack Developer specializing in building exceptional
            digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Crafting Digital Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi, I'm <span className="text-foreground font-semibold">Pavan Makwana</span>, 
              a Full Stack Developer based in Ahmedabad, India. I specialize in creating 
              modern web applications using cutting-edge technologies like React, Next.js, 
              and Node.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend development, I bring 
              ideas to life through clean, efficient code. Whether it's building dynamic 
              user interfaces or developing robust APIs, I'm committed to delivering 
              high-quality solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="glass p-6 rounded-xl hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-8 h-8 text-[var(--primary)] mb-3" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
