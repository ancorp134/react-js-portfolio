import React from "react";
import "../styles/skill.css";
import { skillList } from "./skilllist";



export default function Skill() {
  return (
    <div className="skill-container">
      <div className="skill-section">
        <div className="header-text">
          <h3>Languages</h3>
        </div>
        {skillList.map((e) => {
          return <h1>e</h1>
        })}
      </div>
    </div>
  );
}
