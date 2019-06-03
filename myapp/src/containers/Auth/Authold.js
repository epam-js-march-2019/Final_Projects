import React, {Component}  from 'react';
import Input from '../../Components/Input/Input.js';
import Registr from '../Registr/Registr.js';
import Modal from 'react-modal';
import './Auth.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    display:'flex',
    flexDirection: 'column',
        width: '300px'
  }
};

Modal.setAppElement('#root');

export default class Auth extends Component{

constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
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

	signIn=()=>{
	  //const obj={password:this.state.password,email:this.state.email}
	  //localStorage.setItem('user',JSON.stringify(obj))
	  const email=document.getElementsByClassName("email")[0].value;
	  const password=document.getElementsByClassName("password")[0].value;

	  if(JSON.parse(localStorage.getItem("user")).email !== email){
	  	alert('Вы не зарегистрированы!')}
	  else{
	  	if(JSON.parse(localStorage.getItem("user")).password !== password){
	  		alert('Пароль неверный')
	  	}
	  	else{
	  		alert('зашли');
	  		 this.closeModal();
	  	}

	  }
	}

  render(){
    return(
    <div className="Auth">
   <button  onClick={this.openModal}>Sign In</button>
   <Modal 
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Auth"
      >
      <div className="Auth_TopBar">
         <h2 className="Auth_title" ref={subtitle => this.subtitle = subtitle}>Авторизация</h2>
         <button className="AuthForm__button" onClick={this.closeModal}>Close</button>
      </div>
      <Input label="Email" nameInput="email" placeholder="petrova@mail.ru"/>
      <Input label="Password" nameInput="password" placeholder="password" />
      <button className="AuthForm__button" onClick={this.signIn}>Sign In</button>
      <Registr/>
   </Modal>
	</div>
    )
    }
}