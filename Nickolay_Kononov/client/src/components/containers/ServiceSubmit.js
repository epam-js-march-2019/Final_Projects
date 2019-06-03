import React, { Component} from 'react';
import { connect } from 'react-redux';
import {submitNewService} from "../../actions/serviceActions";
import {withRouter } from "react-router-dom";
import {Button} from 'react-bootstrap';
import {userAdmin} from "../../actions/authActions";

class ServiceSubmit extends Component{

    constructor() {
        super();

        this.state = {
            submission: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(userAdmin(this.props.username));
    }

    updateSubmission(event) {
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState ({
            submission: updatedSubmission
        });
    }

    submitSubmission(){
        this.props.dispatch(submitNewService(this.state.submission));
        this.props.history.push("/");
    }

    render(){


        if(this.props.admin) {
            return (  <div>
                    Name <input onChange={this.updateSubmission.bind(this)} id="name" type="text"
                                placeholder="Name"/><br/>
                    Description <input onChange={this.updateSubmission.bind(this)} id="description" type="text"
                                       placeholder="Description"/><br/>
                    Body <br/>
                    <textarea onChange={this.updateSubmission.bind(this)} id="body">

                    </textarea><br/>

                    <Button variant="outline-primary" onClick={this.submitSubmission.bind(this)}>Submit story</Button>
                </div>
            )
        }

        return null;
    }

}

const mapStateToProps = state => {
    return {
        admin: state.auth.admin,
        username: state.auth.username
    }
};

export default withRouter(connect(mapStateToProps)(ServiceSubmit))