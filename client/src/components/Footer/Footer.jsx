import React, { Fragment } from 'react';
import './Footer.css';

function Footer() { 
  return (
    <Fragment>

      <p className="footer__copyright">Все права защищены 2019 © FabLab</p>

      <ul className="footer__partners-list">

        <li className="footer__partners-item">Наши партнёры:</li>

        <li className="footer__partners-item">
          <a href="https://www.5top100.ru/" className="footer__partners-link">
            <img src="/img/partners/5100.jpg" alt="проект 5100" />
          </a>
        </li>

        <li className="footer__partners-item">
          <a href="http://fablab.spbstu.ru/ru_RU/" className="footer__partners-link">
            <img src="/img/partners/polytech.jpg" alt="фаблаб политех" />
          </a>
        </li>

        <li className="footer__partners-item">
          <a href="http://www.ifmo.ru/ru/" className="footer__partners-link">
            <img src="/img/partners/itmo.jpg" alt="университет итмо" />
          </a>
        </li>

      </ul>
      
    </Fragment>
  )
}

export default Footer;