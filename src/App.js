import React from 'react';
import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects';
import Contact from './components/Contact.js';
import FlowerRow from './components/FlowerRow.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutMe />
      <FlowerRow />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
