import React from 'react';
import SignInLinks from "../signInLinks/SignInLinks";
import style from './nav.module.css'
import SignOutLinks from "../signOutLinks/SignOutLinks";
import {connect} from "react-redux";


const Nav = (props) => {
  const { auth,profile } = props;
  //console.log(auth)
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>;
        return(
            <div>
                <div className={style.container}>
                    { links }
                </div>
            </div>
        )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
    auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(Nav)