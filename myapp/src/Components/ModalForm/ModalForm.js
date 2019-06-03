import React from 'react';
import Modal from 'react-modal';
import Auth from '../../containers/Auth/Auth.js';
import './ModalForm.css';
import Registr from '../../containers/Registr/Registr.js';


const customStyles = {
content : {
	     top: '0px ',
    left: '0px',
    position: 'relative',
width: '300px',
right : 'auto',
bottom : 'auto',
    margin: '0 auto'
}
};
Modal.setAppElement('#root')

export default class ModalForm extends React.Component {
constructor(props) {
super(props);
this.state = {
modalIsOpen: false,
auth:true
};
this.openModal = this.openModal.bind(this);
this.handleUPClick = this.handleUPClick.bind(this);
this.handleINClick = this.handleINClick.bind(this);
this.closeModal = this.closeModal.bind(this);
this.afterOpenModal = this.afterOpenModal.bind(this);
this.singIn = this.singIn.bind(this);
this.signUp = this.signUp.bind(this);
}

openModal() {
this.setState({modalIsOpen: true});
}

afterOpenModal() {
}

closeModal() {
this.setState({modalIsOpen: false});
}


singIn=()=>{
if (!localStorage.getItem('users')) {
localStorage.setItem('users', "[]");
}
const email=document.getElementsByClassName("email")[0].value;
const password=document.getElementsByClassName("password")[0].value;

const arrRegUser=JSON.parse(localStorage.getItem('users'));
const isRightemail= arrRegUser.find(x => x.email === email);
const isRightPassword= arrRegUser.find(x => x.password === password);
//не зарестрирован
var error=[];
// if(!password){error+='Password is empty.\n';}
// if(!email){error+='Password is empty.\n';}
if((!isRightemail) || (!isRightPassword)){
error+='Неверный email или пароль.\n';
}
if(error.length !== 0 ){
alert(error);
}
//зарегистрирован
if(error.length === 0 ){
//document.getElementsByClassName("YourProfile")[0].style.display='block';
localStorage.setItem('currentUser', isRightemail.id);
this.setState({modalIsOpen: false});
this.props.updateData(isRightemail.id)
//window.location.reload(true);
}


}


signUp=()=>{

if (!localStorage.getItem('users')) {
localStorage.setItem('users', "[]");
}
//проверяем все ли поля заполнены и верно ли
const phoneNumber=document.getElementsByClassName('phoneNumber')[0].value;
const nameUser=document.getElementsByClassName('nameUser')[0].value;
const repeatPassword=document.getElementsByClassName('repeatPassword')[0].value;
const email=document.getElementsByClassName("email")[0].value;
const password=document.getElementsByClassName("password")[0].value;
const arrayValue= [{name:'email',value:email},{name:'password',value:password},
{name:'repeatPassword',value:repeatPassword},{name:'nameUser',value:nameUser},
{name:'phoneNumber',value:phoneNumber}];

var error=[];
arrayValue.map.call(arrayValue, function(obj) {
if(!obj.value){
error+=obj.name+" is empty!\n";
}
});

if (localStorage.getItem('users')){
const repeatPassword=document.getElementsByClassName('repeatPassword')[0].value;
const password=document.getElementsByClassName("password")[0].value;
const arrRegUser=JSON.parse(localStorage.getItem('users'));
const isRegEmail= arrRegUser.find(x => x.email === email);
const isRegPhone= arrRegUser.find(x => x.phoneNumber === phoneNumber);
if (typeof isRegEmail !== "undefined" || typeof isRegPhone !== "undefined"){
error+='с таким email or phone уже есть.\n';
}
if(password !== repeatPassword){
error+='пароли не одинаковые.\n';
}
}
//если ошибка выводим alert, если ошибки нет сохраняем
if(error.length !== 0 ){
alert(error);
}
if(!error.length){
if(password !== repeatPassword){
console.log('пароли не одинаковые ');
}
else{
const arr=JSON.parse(localStorage.getItem('users'));
const id=arr.length+1;
const obj={id:id,password:password,email:email,phoneNumber:phoneNumber,nameUser:nameUser,order:[]}
//записываем пользователя в localstorage
arr.push(obj)
console.log(arr)
localStorage.setItem('users', JSON.stringify(arr));
localStorage.setItem('currentUser', id);
// document.getElementsByClassName("YourProfile")[0].style.display='block';
this.setState({modalIsOpen: false});
this.props.updateData(id)
//window.location.reload(true);
}
}
}
handleINClick() {
this.setState({auth: true});
}
handleUPClick() {
this.setState({auth: false});
}

render() {
const auth = this.state.auth;
let form;
let titleForm;
let button;
if(auth){
form =
<Auth />;
titleForm="Sign in";
button = <a className="Modal_button" onClick={this.singIn}>Sing In</a>;
}
else{
form =
<Registr />;
titleForm="Sign up";
button = <a className="Modal_button" onClick={this.signUp}>Save</a>;
}

return (
<div>
    <a className="Modal_link_main" onClick={this.openModal}>{titleForm}</a>
    <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
       <div className="Modal_header">
        <a className="Modal_link SignIn" onClick={this.handleINClick}>Sign In</a>
        <a className="Modal_link SignUp" onClick={this.handleUPClick}>Sign Up</a>

        <button className="Modal_button close" onClick={this.closeModal}>X</button>
        </div>
        <div className="Modal_Title">{titleForm + " to MuaBeauty"}</div>
        {form}
        {button}
    </Modal>
</div>
);
}
}