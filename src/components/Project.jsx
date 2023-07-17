import React from 'react'
import '../styles/projectitem.css'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../components/projectlist'
import { useEffect } from 'react'
const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0)
}, [])
  return (
    <div className='projects'>
      
       <div className="container animate__animated animate__fadeInLeft">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} key={project.key} desc ={project.info} skill = {project.skills} codelink = {project.codeLink} demolink = {project.demoLink} />
        })}

      </div>
    </div>
  )
}

export default Projects