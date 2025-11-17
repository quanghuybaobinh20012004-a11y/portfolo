import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Blog from './components/Blog.jsx'; 
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;