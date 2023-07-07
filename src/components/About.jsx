import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import '../styles/about.css';

import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scroll(0, 0)
}, [])
  return (
    <>

      <div className="about">
        <VerticalTimeline>

          <VerticalTimelineElement

            className='vertical-timeline-element--education'

            date="AUG 2019 - JULY 2023"
            iconStyle={{
              background: "#64CCC5",
              color: "black"
            }}

            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}>
            <h2 className="vertical-timeline-element-title" >
            Dr. A.P.J. Abdul Kalam Technical University Uttar Pradesh
            </h2>
            <br />
            <h3 className="vertical-timeline-element-title" >
              Bachelor of Technology in Information Technology
            </h3>

            <p>Graduated with distinction,achieving an SGPA of 8.16.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement

            className='vertical-timeline-element--education'

            date="2016 - 2017"
            iconStyle={{
              background: "#64CCC5",
              color: "black"
            }}

            icon={<i className="fa-solid fa-building-columns about-icon"></i>}>
            <h2 className="vertical-timeline-element-title" >
             Modern School, Noida
            </h2>
            <br />
            <h3 className="vertical-timeline-element-title" >
                Intermediate
            </h3>

            <p>Passed with distinction,achieving an CGPA of 8.87.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'

            date="2014 - 2015"

            iconStyle={{
              background: "#64CCC5",
              color: "black"
            }}
            icon={<i className="fa-solid fa-building-columns about-icon"></i>}>

            <h2 className="vertical-timeline-element-title" >
              Modern School, Noida
            </h2>
            <br />
            <h3 className="vertical-timeline-element-title" >
              High School
            </h3>
        

            <p>Passed with distinction,achieving an CGPA of 8.0.</p>
          </VerticalTimelineElement>



        </VerticalTimeline>
      </div>
      
    </>
  )
}

export default About
