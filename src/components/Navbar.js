import React from 'react';
import './Navbar.css';

function Navbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="navbarSection">
      <div className="navbar">
        <a href="#welcome" onClick={(e) => scrollToSection(e, 'welcome')}><img className="iconWhite" src={process.env.PUBLIC_URL + '/iconWhite.png'} alt="logo" /></a>
        <a href="#aboutme" onClick={(e) => scrollToSection(e, 'aboutme')}>About Me</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Me</a>
      </div>
    </div>
  );
}

export default Navbar;