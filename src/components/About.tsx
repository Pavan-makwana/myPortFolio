import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Rocket, Users, Award, GraduationCap, Languages } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Writing maintainable, scalable code using Next.js, React & NestJS',
    },
    {
      icon: Rocket,
      title: 'End-to-End Delivery',
      description: 'Taking products from initial concept and UI to cloud deployment',
    },
    {
      icon: Users,
      title: 'Client & Product Focused',
      description: 'Delivering tailored SaaS and mobile solutions with stellar UX',
    },
    {
      icon: Award,
      title: 'APIs & Security',
      description: 'Robust RESTful APIs, JWT auth, database design & optimization',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack & Product Developer focused on building scalable web, mobile, and SaaS solutions
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
              Building Scalable Products & Experiences
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi, I'm <span className="text-foreground font-semibold">Pavan Makwana</span>, 
              a Full Stack Developer and Product Developer based in Ahmedabad, India.
              I focus on building scalable web applications, SaaS products, and mobile solutions 
              using Next.js, React, React Native, Node.js, NestJS, and modern databases.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experienced in taking products from idea to implementation, with hands-on expertise 
              in RESTful APIs, authentication workflows, database design, cloud deployment, 
              and modern UI/UX design.
            </p>

            {/* Quick credentials chip strip */}
            <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
                <span>B.Sc. IT · CGPA 8.18 (Gujarat Univ.)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Languages className="w-4 h-4 text-[var(--accent)]" />
                <span>English · Hindi · Gujarati</span>
              </div>
            </div>
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
