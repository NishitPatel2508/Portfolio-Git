import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import SkillCard from "./SkillCard/SkillCard";
import { skills_data } from "../../data/skills_data";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-title">
        <h1>Skils</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-container">
        {skills_data.map((list, index) => {
          return <SkillCard {...list} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
