import React from 'react'
import '../styles/project.css'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../components/projectlist'
import { useEffect } from 'react'
const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0)
}, [])
  return (
    <div className='projects'>
       <h1 className='text head text-center animate__animated animate__backInDown' id='project-text'>My Projects ⚒️</h1>
      <div className="projectList animate__animated animate__backInUp">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} key={project.key} />
        })}

      </div>
    </div>
  )
}

export default Projects