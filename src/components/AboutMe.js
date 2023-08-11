import React from 'react';
import './AboutMe.css';
import Headshot from './Headshot.js';

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme">
      <p><span className="aboutmeheader">About Me</span></p>
      <div className="content">
        <div className="left-side">
          <p className="aboutmeparagraph">
            <span>
            Hello, Thank you for visiting my website! <br />
            I am passionate about web development, software engineering, and UI/UX design. <br />
            With a background in networking and cybersecurity, I specialize in crafting seamless digital experiences. <br />
            My goal is to connect with like-minded individuals and make a positive impact in the world of technology. <br />
            Feel free to reach out for tech-related discussions or opportunities!
            </span>
          </p>
        </div>
        <div className="right-side">
        <Headshot />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
