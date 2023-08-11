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
              Hello, I'm Erica Cradeur, an associate network engineer at Valmont Industries, Inc. My journey began as a network engineer intern during my college years at Creighton University, where I graduated with a double major in Computer Science & Informatics and Digital Development, along with a minor in Business Administration. While I initially focused on networking and cybersecurity, my true passion lies in web development, software engineering, front-end development, and UI/UX design. I aim to craft seamless and visually captivating digital experiences, drawing on my diverse skill set and business acumen to integrate cutting-edge technologies for optimal results.
              As a dedicated professional, my discipline, resilience, and problem-solving skills were honed during my time as a student-athlete, participating in cross country and track & field on scholarship. Now, in the tech industry, I'm committed to leveraging these qualities to achieve outstanding outcomes in every project I undertake. My goal is to connect with like-minded individuals who share my enthusiasm for technology and innovation, fostering collaboration and learning from one another.
              Thank you for visiting my website! If you're interested in exploring tech-related discussions or potential opportunities, feel free to reach out. Let's make a positive impact together in the world of web development and software engineering!
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
