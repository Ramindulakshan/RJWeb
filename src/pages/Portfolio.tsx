import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';
import { Menu, X } from 'lucide-react';
export function Portfolio() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'About',
    href: '#hero'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50" style={{
      scaleX
    }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-slate-100 tracking-tight">
            RJ<span className="text-cyan-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                {link.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-slate-400 hover:text-cyan-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
            </div>
          </motion.div>}
      </nav>

      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>;
}