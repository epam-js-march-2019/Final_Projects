import React, { Component } from 'react';
import {submitLogin, submitRegister} from '../../actions/authActions';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';


class Login extends Component {

    constructor(){
        super();

        this.state = {
            details:{},
            error: ''
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    login(){
        if(this.state.details.username && this.state.details.password) {
            this.props.dispatch(submitLogin(this.state.details));
        }

        if(!this.state.details.username && !this.state.details.password){
            this.setState({
                error: 'Заполните поля'
            });
            throw Error('Empty fields')
        }

        if (!this.state.details.username){
            this.setState({
                error: 'Заполните имя'
            });
            throw Error('Fill username');
        }


    }

    render(){
        return (
            <div>
                <h3>Вход</h3>
                    <Form.Group>
                        <Form.Text>
                                <span className='error'> {this.props.error.toString()? <span> Логин или пароль неверны </span> :  <span> {this.state.error? <span>{this.state.error}</span> : ''} </span> } </span>
                        </Form.Text>
                        <Form.Label>Login</Form.Label>
                        <Form.Control onChange={this.updateDetails.bind(this)} id="username" type="text" placeholder= "Username" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.updateDetails.bind(this)} id="password" type="password" placeholder= "Password" required/>
                    </Form.Group>

                    <Button onClick={this.login.bind(this)} variant="primary" type="submit">
                        Войти
                    </Button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
};

export default connect(mapStateToProps)(Login);