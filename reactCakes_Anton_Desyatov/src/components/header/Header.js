import React from 'react';
import './Header.css'
import logo from '../../images/cupCakesLogo.png'
 class Header extends React.Component{

     render(){
         return(
             <div className='header'>
                 <div className='logoContainer'>
                     <img src={logo} alt='logo'/>
                 </div>
             </div>
         );
     }
 }
 export default Header;