import React from 'react'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import moment from "moment";
import style from './ProjectDetails.module.css'
const ProjectDetails = (props) => {
    const { project,auth } = props;

    if(!auth.uid) return <Redirect to='/signin' />

    if(project){
        return(
            <div className={style.card}>
                <div>
                    <div>
                        <span className="title">Your Master: <p className={style.master}>{project.title}</p></span>
                        <p className={style.time}>Time for your visit - {project.content}</p>
                    </div>
                    <div>
                        <div>User Profile: {project.authorFirstName} {project.authorLastName}</div>
                        <div className={style.dateString}>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
            )
    }else{
        return(
            <div className='container'>
                <p>Loading project...</p>
            </div>
        )
    }


};
const mapStateToProps = (state,ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

        return{
            project: project,
            auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
