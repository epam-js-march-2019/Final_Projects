import React, { Component } from 'react'
import './App.css';
import Layout from './Layout/Layout.js'
import TopBar from './containers/TopBar/TopBar.js'
import ProfilePage from './containers/ProfilePage/ProfilePage.js'
import Addres from './Components/Addres/Addres.js'
import Catalog from './Components/Catalog/Catalog.js'
import { BrowserRouter, Route , NavLink} from 'react-router-dom';

const links = [
      {title:'О нас', to:'/', exact:false},
      {title:'Каталог', to:'/Catalog', exact:true},
      {title:'Адрес', to:'/Addres', exact:false}
]

if (!localStorage.getItem('users')) {
localStorage.setItem('users', "[]");
localStorage.setItem('currentUser', "0");
}

export default class App extends Component{

  getLink(){
    return (
    links.map((link, index) => {
    return(
    <li key={index}>
        <NavLink exact key={index} to={link.to}>
            {link.title}
        </NavLink>
    </li>
    )
    })
    )
  }

  render(){
    return(
     <Layout>
    <BrowserRouter>
        <TopBar/>
        <nav className='Menu'>
            <ul>
                {this.getLink()}
            </ul>
        </nav>
        <Route path="/" exact render={()=>
            <div className="AboutUs">
                <div>
                    <h1>About us!</h1>
                    <p>Hello, everyone! We are cute company!</p>
                </div>
            
            </div>
            }/>
            <Route path="/Catalog" component={Catalog}/>
             <Route path="/Addres" component={Addres}/>
            <Route path="/Profile" component={ProfilePage}/>
    </BrowserRouter>
</Layout>
    )
  }
}