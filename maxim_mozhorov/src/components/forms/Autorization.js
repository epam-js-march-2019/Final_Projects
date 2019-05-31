import React, {Component} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Autorization extends Component{
    constructor(props){
        super(props);
        this.state ={
            isAutorizeForm : true
        };
        this.changeForm = this.changeForm.bind(this);
    }

    changeForm(event){
        let isAutorizeForm;
        if(event.target.id === 'signIn') {isAutorizeForm = true; }
        else{isAutorizeForm = false}

        if (isAutorizeForm !== this.state.isAutorizeForm){
            this.setState({
                isAutorizeForm : !this.state.isAutorizeForm
            })
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="tab">
                            <ul className="nav nav-tabs">
                                <li role="presentation"
                                    onClick={this.changeForm}
                                    className={this.state.isAutorizeForm ? "active" : ""}>
                                    <a id="signIn">sign in</a>
                                </li>
                                <li role="presentation"
                                    onClick={this.changeForm}
                                    className={this.state.isAutorizeForm ? "" : "active"}>
                                    <a id="signUp">sign up</a>
                                </li>
                            </ul>
                            <div className="tab-content tabs">
                                {this.state.isAutorizeForm ?  <SignIn signIn={this.props.signIn} />: <SignUp signUp={this.props.signUp} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Autorization;