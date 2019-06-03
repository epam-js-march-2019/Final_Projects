import React, {Component}  from 'react';
import Input from '../../Components/Input/Input.js';
import Modal from 'react-modal';
import Auth from '../Auth/Auth.js';
import './Registr.css';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display:'flex',
    flexDirection: 'column',
    width: '300px'
  }
};

export default class Registr extends Component{

signUp=()=>{
  //проверяем все ли поля заполнены и верно ли 
  const phoneNumber=document.getElementsByClassName("phoneNumber")[0].value;
  const nameUser=document.getElementsByClassName("nameUser")[0].value;
  const repeatPassword=document.getElementsByClassName("repeatPassword")[0].value;
  const email=document.getElementsByClassName("email")[0].value;
  const password=document.getElementsByClassName("password")[0].value;
  const arrayValue= [{name:"email",value:email},{name:"password",value:password},
  {name:"repeatPassword",value:repeatPassword},{name:"nameUser",value:nameUser},
  {name:"phoneNumber",value:phoneNumber}];
  var error=[];
  arrayValue.map.call(arrayValue, function(obj) {
  if(!obj.value){
     error+=obj.name+" is empty!\n";
  }
  });
console.log(error)
  if(error.length !== 0 ){
    alert(error);
  }
  else{
    if(JSON.parse(localStorage.getItem("user")).email == email || JSON.parse(localStorage.getItem("user")).phoneNumber == phoneNumber){
      console.log('с таким email or phone уже есть');
    }
    if(password !== repeatPassword){
      console.log('пароли не одинаковые ');
    }
    else{
        const obj={password:password,email:email,phoneNumber:phoneNumber,nameUser:nameUser}
        localStorage.setItem('user',JSON.stringify(obj));
    }
  }
}

constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
    openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
    	<div className="Registr">
    	<button  onClick={this.openModal}>Sign Up</button>
    	<Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="Auth_TopBar">
        <h2 className="Auth_title" ref={subtitle => this.subtitle = subtitle}>Регистрация</h2>
         <button className="AuthForm__button" onClick={this.closeModal}>Close</button>
        </div>
			<Input placeholder="petrova@mail.ru" label="Email" nameInput="email"/>
      <Input placeholder="Charly" label="Name" nameInput="nameUser"/>
      <Input placeholder="+799998888" label="Phone Number" nameInput="phoneNumber"/>
      <Input placeholder="Password" label="Password" nameInput="password"/>
      <Input placeholder="Password" label="Repeat password" nameInput="repeatPassword"/>
      
				<Auth/>
				<button  className="AuthForm__button" onClick={this.signUp}>Sign Up</button>
        </Modal>
    	</div>
    )
    }
}