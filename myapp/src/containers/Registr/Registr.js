import React, {Component} from 'react';
import Input from '../../Components/Input/Input.js';

export default class Registr extends Component{

constructor(props) {
super(props);
this.state = {
};
}
render(){
return(
<form>
    <Input placeholder="petrova@mail.ru" label="Email" nameInput="email" />
    <Input placeholder="Charly" label="Name" nameInput="nameUser" />
    <Input type="number" placeholder="799998888" label="Phone Number" nameInput="phoneNumber" />
    <Input type="password" placeholder="Password" label="Password" nameInput="password" />
    <Input type="password" placeholder="Password" label="Repeat password" nameInput="repeatPassword" />
</form>
)
}
}