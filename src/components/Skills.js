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
          </div>
          <div className="skillRow">

          </div>
          
        </div>
    </div>
  );
}

export default Skills;