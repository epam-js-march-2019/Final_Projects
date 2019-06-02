import React from 'react';
import style from './Footer.module.css'
import {FaInstagram, FaTwitter,FaFacebook} from 'react-icons/fa'


let Footer = () => {
    return(
        <div className={style.footer}>
            <ul className={style.socialNetContainer}>
                <li className={style.socialItem}>
                    <a href="#" className={style.linkSocialItem}><FaTwitter/></a>
                </li>
                <li className={style.socialItem}>
                    <a href="#" className={style.linkSocialItem}><FaFacebook/></a>
                </li>
                <li className={style.socialItem}>
                    <a href="#" className={style.linkSocialItem}><FaInstagram/></a>
                </li>
            </ul>
            <p className={style.text}>New trademark "Barber" registrated in Russia 2019</p>
            <p className={style.text}>Design by Alex Shabunin </p>
        </div>
    )
};
export default Footer;