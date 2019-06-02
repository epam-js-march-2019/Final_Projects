import React from 'react';
import style from './Services.module.css'
import cardTitle1 from '../assets/images/cardback/cardTitle1.png'
import cardTitle2 from '../assets/images/cardback/cardTitle5.png'
import cardTitle3 from '../assets/images/cardback/cardTitle3.png'
import cardTitle4 from '../assets/images/cardback/cardTitle4.png'
import back from '../assets/images/cardback/cardBack1.jpg'
import back2 from '../assets/images/cardback/cardBack2.jpg'
import back3 from '../assets/images/cardback/cardBack3.jpg'
import back4 from '../assets/images/cardback/cardBack4.jpg'


class ServiceItem extends React.Component{
    render() {
        return(
            <div className={style.cardsContainer}>
                <div className={style.card}>
                    <div className={style.con} style={{background: `url(${back}) no-repeat center/cover`}}>
                        <a href="">
                            <img src={cardTitle1} alt="" className={style.imgTitle}/>
                        </a>
                    </div>
                    <div className={style.informationContainer}>
                        <a className={style.title}>THE BEARD – FROM £23</a>
                        <span className={style.describe}>Jack’s own version of a beard trim & hot towel treatment</span>
                        <div className={style.moreInfo}>
                            <span >Find Out More</span>
                        </div>

                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.con} style={{background: `url(${back2}) no-repeat center/cover`}}>
                        <a href="">
                            <img src={cardTitle2} alt="" className={style.imgTitle}/>
                        </a>
                    </div>
                    <div className={style.informationContainer}>
                        <a className={style.title}>ROYAL RIPPER – FROM £70</a>
                        <span className={style.describe}>A service fit for a king & therefore, fit for you</span>
                        <div className={style.moreInfo}>
                            <span >Find Out More</span>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.con} style={{background: `url(${back3}) no-repeat center/cover`}}>
                        <a href="">
                            <img src={cardTitle3} alt="" className={style.imgTitle}/>
                        </a>
                    </div>
                    <div className={style.informationContainer}>
                        <a className={style.title}>THE SHAPE – FROM £27</a>
                        <span className={style.describe}>Time to trim your beard back into shape!</span>
                        <div className={style.moreInfo}>
                            <span >Find Out More</span>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.con} style={{background: `url(${back4}) no-repeat center/cover`}}>
                        <a href="">
                            <img src={cardTitle4} alt="" className={style.imgTitle}/>
                        </a>
                    </div>
                    <div className={style.informationContainer}>
                        <a className={style.title}>FULL RIPPER – FROM £52</a>
                        <span className={style.describe}>A service fit for a king & therefore, fit for you</span>
                        <div className={style.moreInfo}>
                            <span >Find Out More</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default ServiceItem;