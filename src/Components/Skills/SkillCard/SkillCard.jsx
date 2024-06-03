import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./SkillCard.css";
const SkillCard = ({ data, title }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-content">
        {data.map((list, index) => {
          return (
            <article className="skill-details" key={index}>
              <BsPatchCheckFill className="skill-icon" />
              <div>
                <h4 className="skill-name">{list.skill}</h4>
                <small className="text-muted skill-level">{list.level}</small>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
