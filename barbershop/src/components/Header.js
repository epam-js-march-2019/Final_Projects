import React from 'react';
import { NavLink } from 'react-router-dom'


class Header extends React.Component {
  render() {
    const { isUserLogged, logOut } = this.props
    return (
      <div className='hero'>
        <div className='hero-container'>
          <div className='hero-logo'></div>
          <ul className='hero-navlinks navlinks'>
            <li><NavLink className='navlinks-link' activeClassName="active" exact to="/homepage">Home Page</NavLink></li>
            <li><NavLink className='navlinks-link' activeClassName="active" to="/about">About</NavLink></li>
            {
              !isUserLogged &&
              <li><NavLink className='navlinks-link' activeClassName="active" to="/login">Login</NavLink></li>
            }
            <li><NavLink className='navlinks-link' activeClassName="active" to="/services">Services</NavLink></li>
            <li><NavLink className='navlinks-link' activeClassName="active" to="/contacts">Contacts</NavLink></li>
            {
              isUserLogged &&
              <>
                <li><NavLink className='navlinks-link' activeClassName="active" to="/account">Account</NavLink></li>
                <button className='button-logout' onClick={logOut}>log out</button>
              </>
            }
          </ul>
        </div>
      </div>

    )
  }
}

export default Header;