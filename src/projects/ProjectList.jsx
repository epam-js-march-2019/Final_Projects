import React from 'react'
import style from './ProjectList.module.css'
import ProjectSummary from "./ProjectSummary";
import {Link} from 'react-router-dom'


const ProjectList = ({projects}) => {
    return (
        <div>
            <div className={style.listSection}>
                {projects && projects.map(project => {
                    return (
                        <Link to={'./project/' + project.id } key={project.id}>
                        <ProjectSummary project={project} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};
export default ProjectList