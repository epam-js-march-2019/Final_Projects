import React, {Component}  from 'react';
import Input from '../../Components/Input/Input.js';
import './Auth.css';

export default class Auth extends Component{

  render(){
    return(
      <form>
      <Input label="Email" nameInput="email" placeholder="petrova@mail.ru"/>
      <Input label="Password" nameInput="password" placeholder="password" />
      </form>
    )
    }
}