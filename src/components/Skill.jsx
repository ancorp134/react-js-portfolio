import React from "react";
import "../styles/skill.css";
import { skillList } from "./skilllist";
import skillItem from "./skillItem";


export default function Skill() {
  return (
    <div className="skill-container">
      <div className="skill-section">
        <div className="header-text">
          <h3>Languages</h3>
        </div>
        {skillList.map((e) => {
          return <skillItem languages={e.Languages}></skillItem>
        })}
      </div>
    </div>
  );
}
