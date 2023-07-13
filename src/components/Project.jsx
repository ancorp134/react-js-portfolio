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
      
       <div className="container animate__animated animate__slideInUp">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} key={project.key} />
        })}

      </div>
    </div>
  )
}

export default Projects