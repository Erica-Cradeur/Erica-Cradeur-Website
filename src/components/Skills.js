import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="skills">
        <p><span className="skillsheader">Skills</span></p>
        <div className="skillList">
          <div className="skillRow">
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/typescript.png'} alt="Typescript" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/tailwindcss.png'} alt="TailwindCSS" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/sql.png'} alt="SQL" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/react.png'} alt="React" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/ps.png'} alt="Photoshop" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/python.png'} alt="Python" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/npm.png'} alt="NPM" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/notion.png'} alt="Notion" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/node.png'} alt="NodeJS" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/mongo.png'} alt="MongoDB" /></div>
          </div>
          <div className="skillRow">
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/js.png'} alt="JavaScript" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/java.png'} alt="Java" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/html.png'} alt="HTML" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/github.png'} alt="Github" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/git.png'} alt="Git" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/figma.png'} alt="Figma" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/css.png'} alt="CSS" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/c.svg'} alt="C#" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/azure.png'} alt="Azure" /></div>
            <div className="SkillIcon"><img src={process.env.PUBLIC_URL + './SkillsImgs/angular.svg'} alt="Angular" /></div>
          </div>
        </div>
    </div>
  );
}

export default Skills;