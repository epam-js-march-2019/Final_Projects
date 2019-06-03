import React, { Component} from 'react';
import { submitRegister } from '../../actions/authActions';
import { connect } from 'react-redux';
import Form from "react-bootstrap/es/Form";
import {Button} from "react-bootstrap";

class Register extends Component {

    constructor(){
        super();

        this.state = {
            details:{},
            error:''
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    register(){
        if(this.state.details.username && this.state.details.password) {
            this.props.dispatch(submitRegister(this.state.details));
        }

        if(!this.state.details.username && !this.state.details.password){
            this.setState({
                error: 'Empty fields'
            });
            throw Error('Заполните поля')
        }

        if (!this.state.details.username){
            this.setState({
                error: 'Empty username'
            });
            throw Error('Введитк имя');
        }

        if (!this.state.details.password){
            this.setState({
                error: 'Empty password'
            });
            throw Error('Введите пароль');
        }
    }



    render(){

        return (
            <div>
                <h3>Регистрация</h3>

                <Form.Group>
                    <Form.Text>
                        <span className='error'> {this.props.error.toString()? <span> Пользователь существует </span> :  <span> {this.state.error? <span>{this.state.error}</span> : ''} </span> } </span>
                    </Form.Text>
                    <Form.Label>Login</Form.Label>
                    <Form.Control onChange={this.updateDetails.bind(this)} id="username" type="text" placeholder= "Username" required/>
                    <Form.Text>
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.updateDetails.bind(this)} id="password" type="password" placeholder= "Password" required/>
                </Form.Group>

                <Button onClick={this.register.bind(this)} variant="primary" type="submit">
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

export default connect(mapStateToProps)(Register);