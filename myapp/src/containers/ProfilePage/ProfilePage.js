import React, {Component}  from 'react';
 import Order from '../../Components/Order/Order.js'
import  './ProfilePage.css';

const idCurrUser=localStorage.getItem('currentUser');

export default class ProfilePage extends Component{
   render(){    
    if (localStorage.getItem('currentUser') == "0") {
        document.location.href="/"
    }
    const arrRegUser=JSON.parse(localStorage.getItem('users'));
    const idCurrUser=localStorage.getItem('currentUser');
    const isRightemail= arrRegUser.find(x => x.id == idCurrUser);
    const email = isRightemail.email;
    const phoneNumber = isRightemail.phoneNumber;
    const nameUser = isRightemail.nameUser;
    return(
    	<div className="ProfilePage">
        <div className="ProfilePage_Order">
        <table className="ProfilePage_Order_table">
        <tbody><Order/></tbody></table>
        </div>
        <div className="ProfilePage_User">
        <div>Hello,{idCurrUser}</div>
          <ul>
          <li><b>Email:</b> {email}</li>
          <li><b>Name:</b> {nameUser}</li>
          <li><b>Phone:</b> {phoneNumber}</li>
          </ul>
        </div>
    	</div>
    )
    }
}