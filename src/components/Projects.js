import React from 'react';
import './Projects.css';
import WebsiteImage from './WebsiteImage.js';

function Projects() {
  return (
    <div id= "projects" className="projects">
        <p><span className="projectsheader">Projects</span></p>


        <div id="projectsList" className="projectsList">
          <div className="project">
            <div className="projectImage">
              <p className="websiteImage">
                <WebsiteImage />
              </p>
            </div>
            <div className="projectDescription">
              <span>
                I developed a dynamic and visually captivating website using Figma for design inspiration, and implemented it using Node.js, JavaScript, HTML, CSS, and React.js to deliver an engaging user experience.
              </span>
            </div>
          </div>
        </div>

        <div id="projectsList" className="projectsList">
          <div className="project">
            <div className="projectImage">
              <p className="websiteImage">
                <WebsiteImage />
              </p>
            </div>
            <div className="projectDescription">
              <span>
                calculator
              </span>
            </div>
          </div>
        </div>

        <div id="projectsList" className="projectsList">
          <div className="project">
            <div className="projectImage">
              <p className="websiteImage">
                <WebsiteImage />
              </p>
            </div>
            <div className="projectDescription">
              <span>
                wikipedia redesign
              </span>
            </div>
          </div>
        </div>

        <div id="projectsList" className="projectsList">
          <div className="project">
            <div className="projectImage">
              <p className="websiteImage">
                <WebsiteImage />
              </p>
            </div>
            <div className="projectDescription">
              <span>
                runverse application
              </span>
            </div>
          </div>
        </div>

        <div id="projectsList" className="projectsList">
          <div className="project">
            <div className="projectImage">
              <p className="websiteImage">
                <WebsiteImage />
              </p>
            </div>
            <div className="projectDescription">
              <span>
                styleguide
              </span>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Projects;