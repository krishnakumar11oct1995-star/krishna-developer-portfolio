import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsRadar from './components/SkillsRadar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Discoveries from './components/Discoveries';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to update active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash.startsWith('#discoveries/')) {
        setActiveSection('discoveries');
        return;
      }

      const sections = ['hero', 'skills', 'projects', 'experience', 'discoveries', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c17] text-[#f1f5f9] selection:bg-sky-500 selection:text-white relative">
      {/* Background Subtle Tech Pattern */}
      <div className="fixed inset-0 tech-grid-bg opacity-30 pointer-events-none z-0"></div>

      {/* Global Semantic Header / Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Semantic Page Content */}
      <main id="main-content" className="relative z-10" tabIndex="-1">
        <Hero onNavigate={handleNavigate} />
        <SkillsRadar />
        <Projects />
        <Experience />
        <Discoveries />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
