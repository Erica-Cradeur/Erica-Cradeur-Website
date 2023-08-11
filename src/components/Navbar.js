import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="App">
      <div className="navbar">
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact Me</a>
      </div>
    </div>
  );
}

export default Navbar;
