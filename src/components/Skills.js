import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="skills">
        <div id="flowerRow" className="flowerRow"></div>
        <p><span className="skillsheader">Skills</span></p>
        <div className="skillList">
          <div className="skillRow">
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/js.png'} alt="JavaScript" />JavaScript</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/html.png'} alt="HTML" />HTML</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/css.png'} alt="CSS" />CSS3</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/typescript.png'} alt="Typescript" />Typescript</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/angular.svg'} alt="Angular" />Angular</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/react.png'} alt="React" />React</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/git.png'} alt="Git" />Git</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/node.png'} alt="NodeJS" />NodeJS</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/tailwindcss.png'} alt="TailwindCSS" />TailwindCSS</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/npm.png'} alt="NPM" />NPM</div> 
          </div>
          <div className="skillRow">
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/figma.png'} alt="Figma" />Figma</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/github.png'} alt="Github" />Github</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/ps.png'} alt="Photoshop" />Photoshop</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/mongo.png'} alt="MongoDB" />MongoDB</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/python.png'} alt="Python" />Python</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/c.svg'} alt="C#" />C#</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/notion.png'} alt="Notion" />Notion</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/azure.png'} alt="Azure" />Azure</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/sql.png'} alt="SQL" />SQL</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + '/java.png'} alt="Java" />Java</div>
          </div>
        </div>
    </div>
  );
}

export default Skills;