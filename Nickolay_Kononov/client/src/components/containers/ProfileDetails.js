import React, { Component} from 'react';
import { connect } from 'react-redux';
import Profile from "../presentation/Profile";
import fetchReservation, {fetchService} from "../../actions/serviceActions";
import {userAdmin} from "../../actions/authActions";
import {fetchUserAction} from "../../actions/authActions";

class ProfileDetails extends Component{

    componentDidMount() {

        this.props.dispatch(fetchReservation());
        this.props.dispatch(fetchService());
        this.props.dispatch(fetchUserAction(this.props.username));



        try {
            this.props.dispatch(userAdmin(this.props.username))
        } catch (e) {
            console.log(e);
        }

    }

    render() {

        return (
            <div>
                <Profile  username={this.props.username}  reservation={this.props.reservation} admin={this.props.admin} service={this.props.service} _id={this.props.id}/>

            </div>
        )

    }

}

const mapStateToProps = state => {
  return{
      username: state.auth.username,
      id: state.auth.user._id,
      reservation: state.service.reservation,
      service: state.service.service,
      admin: state.auth.admin
  }
};

export default connect(mapStateToProps)(ProfileDetails);
