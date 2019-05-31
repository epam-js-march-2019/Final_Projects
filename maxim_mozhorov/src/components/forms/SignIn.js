import React, {Component} from 'react';


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
          email : "",
          password : ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.props.signIn.bind(this);
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e){
        this.setState({password: e.target.value});
    }

    render() {
        return(
            <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">username</label>
                        <input type="email" className="form-control" onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default" onClick={() => {this.signIn(this.state.email, this.state.password)}}>Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;