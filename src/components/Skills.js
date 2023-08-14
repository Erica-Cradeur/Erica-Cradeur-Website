import React from 'react';
import './Skills.css';
import './SkillsImgs/js.png';

function Skills() {
  return (
    <div id="skills" className="skills">
        <div id="flowerRow" className="flowerRow"></div>
        <p><span className="skillsheader">Skills</span></p>
        <div className="skillList">
          <div className="skillRow">
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/js.png'} alt="JavaScript" />JavaScripttest</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/html.png'} alt="HTML" />HTML</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/css.png'} alt="CSS" />CSS3</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/typescript.png'} alt="Typescript" />Typescript</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/angular.svg'} alt="Angular" />Angular</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/react.png'} alt="React" />React</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/git.png'} alt="Git" />Git</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/node.png'} alt="NodeJS" />NodeJS</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/tailwindcss.png'} alt="TailwindCSS" />TailwindCSS</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/npm.png'} alt="NPM" />NPM</div> 
          </div>
          <div className="skillRow">
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/figma.png'} alt="Figma" />Figma</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/github.png'} alt="Github" />Github</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/ps.png'} alt="Photoshop" />Photoshop</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/mongo.png'} alt="MongoDB" />MongoDB</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/python.png'} alt="Python" />Python</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/c.svg'} alt="C#" />C#</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/notion.png'} alt="Notion" />Notion</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/azure.png'} alt="Azure" />Azure</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/sql.png'} alt="SQL" />SQL</div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/java.png'} alt="Java" />Java</div>
          </div>
        </div>
    </div>
  );
}

export default Skills;