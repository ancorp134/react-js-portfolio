import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({ image, name, id }) => {
    const navigate = useNavigate();
    return (
        <div className="main-container" onClick={() => {
            navigate("/project/" + id)
        }}>
            <div className='project-item'>
                <div className='img-container'>
                    <img src={image} alt="Project_Image" className='bgImage' />
                    <h1 className='text-center' style={{
                        marginTop : "4rem",
                        color: "white",
                        fontSize: "1.5rem"
                    }}> {name} </h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem