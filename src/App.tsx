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
  const [showProjectsPage, setShowProjectsPage] = useState(false);

  useEffect(() => {
    // Permanently enforce dark mode
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    // Scroll to top when switching pages
    if (showProjectsPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showProjectsPage]);

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
          <Navbar />
          
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