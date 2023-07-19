import React from "react";
import "../styles/skill.css";

export default function skillItem({ languages }) {
  return (
    <>
      {languages.map((e) => {
        return (
          <div className="skills">
            <div className="skill-item">
                
              <img src={e} alt="" srcset="" />
            </div>
          </div>
        );
      })}
    </>
  );
}
