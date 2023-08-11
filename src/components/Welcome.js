import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div id="welcome" className="welcomesection">
        <div className="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="banner">
            <div className="content">
                <div className="landing">
                    <p>
                        <span className="welcome">Welcome</span> to my digital realm!<br />
                        I'm <span className="welcome">Erica Cradeur</span>,<br />
                        a passionate web developer, software engineer, <br />
                        and UI/UX enthusiast, on a mission to craft seamless digital <br />
                        experiences that captivate and inspire.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Welcome;

