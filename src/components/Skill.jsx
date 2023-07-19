import React from "react";
import "../styles/skill.css";
import html from "../assets/images/html.png";
import css from "../assets/images/css-logo.png";
import js from "../assets/images/javascript.png";
import py from "../assets/images/python.png";
import java from "../assets/images/java.png";
import clang from "../assets/images/s.png";
import sql from "../assets/images/sql.png";
import slite from "../assets/images/sqlite.png";
import mongodb from "../assets/images/mongo-db.png";
import mysql from "../assets/images/mysql.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrap-framework-logo.png";
import npm from "../assets/images/npm.png";
import git from "../assets/images/git.png";
import vs from "../assets/images/visual-studio-code.png";
import pm from "../assets/images/postman_macos_bigsur_icon_189815.png";
import django from "../assets/images/django.png";
import node from "../assets/images/nodejs.png";
import wordpress from "../assets/images/wordpress.png"
import 'animate.css';

export default function Skill() {
  return (
    <div className="skill-container">
      <div className="skill-section animate__animated animate__fadeInLeft">
        <div className="header-text">
          <h3>Languages and Framework</h3>
        </div>
        <div className="skills">
          <div className="skill-item">
            <img src={clang} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={py} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={java} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={html} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={css} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={js} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={react} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={bootstrap} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={npm} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={django} alt="" srcset="" className="django" />
          </div>
          <div className="skill-item">
            <img src={node} alt="" srcset="" className="django" />
          </div>
        </div>
      </div>

      {/* Frameworks */}

      <div className="skill-section animate__animated animate__fadeInRight">
        <div className="header-text">
          <h3>Database</h3>
        </div>
        <div className="skills">
          <div className="skill-item">
            <img src={sql} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={mongodb} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={slite} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={mysql} alt="" srcset="" />
          </div>
        </div>
      </div>

      {/* Tools */}

      <div className="skill-section animate__animated animate__fadeInLeft">
        <div className="header-text">
          <h3>Tools</h3>
        </div>
        <div className="skills">
          <div className="skill-item">
            <img src={vs} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={pm} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={git} alt="" srcset="" />
          </div>
          <div className="skill-item">
            <img src={wordpress} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
