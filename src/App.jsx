import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToBottom from './components/ScrollToBottom';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToBottom />
      <ScrollToTop />
    </div>
  );
}

export default App;
