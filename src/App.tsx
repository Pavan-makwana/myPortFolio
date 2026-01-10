import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectsPage } from './components/ProjectsPage';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [showProjectsPage, setShowProjectsPage] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Scroll to top when switching pages
    if (showProjectsPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showProjectsPage]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleViewAllProjects = () => {
    setShowProjectsPage(true);
  };

  const handleBackToHome = () => {
    setShowProjectsPage(false);
    // Scroll to projects section
    setTimeout(() => {
      const element = document.querySelector('#projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          {showProjectsPage ? (
            <ProjectsPage onBack={handleBackToHome} />
          ) : (
            <main>
              <Hero />
              <About />
              <Projects onViewAllProjects={handleViewAllProjects} />
              <Skills />
              <Experience />
              <Contact />
            </main>
          )}
          
          {!showProjectsPage && <Footer />}
        </>
      )}
    </div>
  );
}