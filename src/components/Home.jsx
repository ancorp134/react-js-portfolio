import React from "react";
import "../styles/home.css";
import heroimg from "../assets/images/mainimg.png";
import { NavLink } from "react-router-dom";
// import {NavLink} from "react-router-dom";

function Home() {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                  <h1>
                    Hi, my name is{" "}
                    <strong className="brand-name">Ankit Tyagi</strong>
                  </h1>
                  <h2 className="my-3">
                    As a recent graduate with a passion for learning, I am
                    seeking a challenging role within a dynamic organization.
                    With my strong communication, analytical and problem-solving
                    skills, I am eager to contribute to a team in a
                    collaborative and innovative environment. I am a fast
                    learner and ready to take on new challenges to grow my
                    skills and make a valuable contribution to the company.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="" className="btn-get-started ">
                      Resume
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={heroimg}
                    className="img-fluid animated"
                    alt="home.jpg"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
