import React from 'react'
import ProjectList from "../projects/ProjectList";
import style from './Dashbord.module.css'
import {connect} from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import {Redirect} from "react-router-dom";

class Dashboard extends React.Component{
    render() {
       // console.log(this.props)
        const { projects, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return(
            <div>
                <div className={style.dashboardContainer}>
                    <div className={style.itemContainer}>
                        <ProjectList projects={projects}/>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)