import React, {Component} from 'react';
import "./styles/signup.css";

const skills = [
    "Manicure",
    "Pedicure",
    "Massage"
];

function find(array, value) {
    if (array.indexOf) { // если метод существует
        return array.indexOf(value);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }

    return -1;
}


class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : "",
            email : "",
            password : "",
            about : "",
            hobbies : "",
            skills : []
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.handleHobbiesChange = this.handleHobbiesChange.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
        this.signUp = this.props.signUp.bind(this);

    }

    handleNameChange(e){
        this.setState({ username : e.target.value});
    }

    handleEmailChange(e){
        this.setState({ email : e.target.value});
    }

    handlePasswordChange(e){
        this.setState({ password : e.target.value});
    }

    handleAboutChange(e){
        this.setState({ about : e.target.value});
    }

    handleHobbiesChange(e){
        this.setState({ hobbies : e.target.value});
    }

    handleSkillsChange(e){
        let skills = this.state.skills;

        if(find(skills,e.target.value)!==(-1)){
            skills.pop(e.target.value);
        }
        else {
            skills.push(e.target.value);
        }

        this.setState({
            skills : skills
        });
    }

    render() {
        return(
            <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                <form
                    className="form-horizontal"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.signUp(this.state)}
                    } >
                    <div className="form-group">
                        <label>NickName</label>
                        <input type="text"
                               required
                               className="form-control"
                               onChange={this.handleNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email"
                               required
                               className="form-control"
                               onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                               required
                               className="form-control"
                               onChange={this.handlePasswordChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>About you</label>
                        <textarea
                            required
                            className="form-control"
                            onChange={this.handleAboutChange}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label>Your Hobbies</label>
                        <textarea
                            required
                            className="form-control"
                            onChange={this.handleHobbiesChange}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label>Your Skills</label>
                        {skills.map(
                            (skill, i) =>
                                <p key={i}>
                                    <input
                                        type="checkbox"
                                        name="skills"
                                        value={skill}
                                        onChange={this.handleSkillsChange}
                                         />
                                        <label>{skill}</label>
                                </p>)
                        }
                    </div>


                    <div className="form-group">
                        <button className="btn btn-default" type="submit">Sign up</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp;