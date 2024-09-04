import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/hero/hero.jsx';
import AboutMe from './components/Aboutme/Aboutme.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/projects.jsx';
import Journey from './components/Journey/Journey.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <section id="home" className='h-screen'>
        <Hero />
      </section>
      <section id="about" className='h-screen'>
        <AboutMe />
      </section>
      <section id="skills" className='h-screen'>
        <Skills />
      </section>
      <section id="projects" className='h-screen'>
        <Projects />
      </section>
      <section id="journey" className='h-screen'>
        <Journey />
      </section>
      <section id="contact" className='h-screen'>
        <Contact />
      </section>
    </div>
  );
};

export default App;

