import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp, Mail, Phone, Linkedin as LinkedinIcon, Download } from 'lucide-react';

import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Engagements from './components/Engagements';
import Contact from './components/Contact';

import profilePic from './assets/ricardo_avlessi.jpg';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Expertises', href: '#expertises' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Engagements', href: '#engagements' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <header className="header">
        <nav className="container">
          <div className="logo">RICARDO <span>AVLESSI</span></div>

          <ul className="nav-desktop">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="container hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="name">Ricardo AVLESSI</h1>
              <p className="title">Agroéconomiste & Agrosociologue</p>

              <div className="hero-contact-minimal">
                <a href="mailto:argh2014@gmail.com" className="contact-item">
                  <Mail size={16} />
                  <span>argh2014@gmail.com</span>
                </a>
                <a href="tel:+2290197680703" className="contact-item">
                  <Phone size={16} />
                  <span>+229 01 97 68 07 03</span>
                </a>
                <a href="https://www.linkedin.com/in/h-ricardo-g-avlessi-1216071bb" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <p className="specialty">
                Spécialiste en Genre et Approche Transformationnelle du Genre (GTA),
                cohésion sociale, gouvernance participative et gestion pacifique des conflits.
              </p>
              <h2 className="hero-catchphrase">
                Construire des solutions inclusives et durables pour des communautés plus équitables, résilientes et engagées.
              </h2>
              <div className="cta-group">
                <a href="#experiences" className="btn btn-primary">Découvrir mon parcours</a>
                <a href="#contact" className="btn btn-outline">Travaillons ensemble</a>
                <a href="/CV_Ricardo_AVLESSI.pdf" download="CV_Ricardo_AVLESSI.pdf" className="btn btn-secondary">
                  <Download size={18} />
                  <span>Télécharger mon CV</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-frame">
                <img src={profilePic} alt="Ricardo AVLESSI" className="hero-image" />
              </div>
            </motion.div>
          </div>

          <div className="hero-stats-wrapper">
            <div className="hero-stats container">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">AO</span>
                <span className="stat-label">Afrique de l'Ouest</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">NGO</span>
                <span className="stat-label">Partenaires Internationaux</span>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Expertise />
        <Experience />
        <Skills />
        <Certifications />
        <Engagements />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Ricardo AVLESSI</div>
            <p>Expertise en développement inclusif, participatif et durable.</p>
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} Ricardo AVLESSI. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
