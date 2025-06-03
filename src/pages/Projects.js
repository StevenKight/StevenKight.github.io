
import React from 'react';

import ProjectCard from '../components/ProjectCard';

import './styles/Projects.css';

const ProjectsList = [
    { img_path: '/assets/images/logos/csharp.svg', title: 'Capstone Note Taking App', description: 'A note taking app with a Typescript React Front end, a UWP desktop app, an ASP.Net C# backend, and a SQL Server database.', url: 'https://github.com/StevenKight/CS4982-Group-2' },
    { img_path: '/assets/images/logos/python-svgrepo-com.svg', title: 'UWG Smart Assistant', description: 'This work looks to make student\'s lives easier and more efficient by creating a UWG-specific personal assistant to help students through their daily tasks using Tensorflow with Python.', url: 'https://github.com/StevenKight/UWG-Smart-Assistant' },
    { img_path: '/assets/images/logos/cmake-svgrepo-com.svg', title: 'Physics Engine', description: 'Researching modern optimizations using Fortran and CUDA while deriving complex mathmatical models.', url: 'https://github.com/StevenKight/Physics-Engine' },
];

function Projects() {
    
    return (
        <div className='projects'>
            <div className='projects-container'>
                <div className='projects-content'>
                    {
                        ProjectsList.map((skill) => {
                            return (
                                <ProjectCard 
                                    img_path={skill.img_path} 
                                    title={skill.title} 
                                    description={skill.description} 
                                    url={skill.url}
                                    />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
