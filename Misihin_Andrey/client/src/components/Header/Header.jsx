import React, { Fragment } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';


function Header({ openModal, isLogedIn, checkAuth, handleLogout }) {
  checkAuth();
  console.log();
  return (
    <Fragment>

      <Link to="/">
        <Logo className="header__logo"/>
      </Link>

      <nav className="header__menu">

        <ul className="header__main-list">

          <li className="header__main-item">
            <NavLink to="/equipment" className="header__main-link">Оборудование</NavLink>
          </li>

          <li className="header__main-item">
            <NavLink to="/gallery" className="header__main-link">Галерея работ</NavLink>
          </li>

          {isLogedIn 
            ? <Fragment>
                <li className="header__profile-link header__main-item">
                  <NavLink to="/profile" className="header__main-link">Профиль</NavLink>
                </li>
                <li className="header__user-item header__main-item">
                  <button className="button" onClick={handleLogout}>Выйти</button>
                </li>
              </Fragment>
            : <li className="header__user-item header__main-item">
                <button className="button" onClick={openModal}>Войти</button>
              </li>
          }

        </ul>

      </nav>

    </Fragment>
  )
}

export default Header;