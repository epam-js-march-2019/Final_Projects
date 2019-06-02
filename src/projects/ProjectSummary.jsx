import React from 'react'
import style from './ProjectSummary.module.css'
import moment from "moment";

const ProjectSummary = ({project}) => {
    return (
        <div className={style.container}>
                <div className={style.card}>
                    <span>Your master: {project.title}</span>
                    <p>Your time to cut - {project.content}</p>
                    <p>Posted by: {project.authorFirstName} {project.authorLastName}</p>
                    <p className={style.date}>{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
        </div>
    )
};
export default ProjectSummary