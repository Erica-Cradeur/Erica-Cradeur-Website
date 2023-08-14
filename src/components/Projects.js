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
              <div className="projectSkills">
                <span className="projectSkill">Figma</span>
                <span className="projectSkill">Node.js</span>
                <span className="projectSkill">JavaScript</span>
                <span className="projectSkill">HTML</span>
                <span className="projectSkill">CSS</span>
                <span className="projectSkill">Flexbox</span>
              </div>
              <span className="projectAbout">
                Carefully curated and thoughtfully designed using Figma, my online portfolio serves as a captivating platform to explore a comprehensive display of my diverse skills, impactful projects, and valuable experience.
              </span><br />
              <a href="https://erica-cradeur.github.io/Erica-Cradeur-Website/"><img className="linkIcon" src={process.env.PUBLIC_URL + './arrowUp.svg'} alt="ArrowUp" /></a>
              <a href="https://github.com/Erica-Cradeur/Erica-Cradeur-Website"><img className="linkIcon" src={process.env.PUBLIC_URL + './github.svg'} alt="GitHub" /></a>
              <a href="https://www.figma.com/file/o3JkVabwVvTI4OIkOxxexr/Cradeur-Portfolio-Website?type=design&node-id=1%3A4&mode=design&t=edlBB5UTVVgGfqxE-1"><img className="linkIcon" src={process.env.PUBLIC_URL + './figma.svg'} alt="Figma" /></a>
            </div>
          </div>
        </div>

        <div id="projectsList" className="projectsList">
          <div className="project">
            <div className="projectImage">

            </div>
            <div className="projectDescription">
              <div className="projectSkills">
                <span className="projectSkill"></span>
                <span className="projectSkill"></span>
                <span className="projectSkill"></span>
                <span className="projectSkill"></span>
                <span className="projectSkill"></span>
                <span className="projectSkill"></span>
              </div>
              <span className="projectAbout">
                Experience the convenience of a sleek and user-friendly calculator Progressive Web App (PWA) that effortlessly handles your mathematical needs on any device.
              </span><br />
              <a href="https://erica-cradeur.github.io/calculator/"><img className="linkIcon" src={process.env.PUBLIC_URL + './arrowUp.svg'} alt="ArrowUp" /></a>
              <a href="https://github.com/Erica-Cradeur/calculator"><img className="linkIcon" src={process.env.PUBLIC_URL + './github.svg'} alt="GitHub" /></a>
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