import React, {Component} from 'react'
import TrekkingShortDescription from '../TrekkingShortDescription';

import {trekkingAPI} from '../../trekkingApi'

import "./style.css"
import "../../style/style.css";

class TrekkingArticle extends Component {

    constructor (props) {
        super(props);
        console.log(this.props);
        const {id}=this.props.match.params;
        this.trekking = trekkingAPI.get(id);
    }

    render () {

        const trekking = this.trekking;
        const {user}=this.props;

        if (!trekking) {
            return (
                <div>Извините, но информация по запрашиваемому походу не найдена</div>
            )
         }


        const {isAuth}=this.props;

        let button=null, messageSignUp=null;

        if (isAuth) {
            button = !user.trekking.includes(trekking.id) ? <button onClick={this.handleClick} className={"trekking-article__button button"}>Записаться</button> : null;

            messageSignUp = user.trekking.includes(trekking.id) ? <p className={"trekking-article__message"}>Вы записаны в этот поход</p> : null;
        }

        const messageLog = !isAuth ? <p className={"trekking-article__message"}>Войдите в личный кабинет, чтобы записаться в данный поход!</p> : null;

        const route =trekking.route.map(item=>{return (
            <React.Fragment>
                <h3>{item.day}</h3>
                <p>{item.plan}</p>
            </React.Fragment>
         )});

        return (
             <div className={"trekking-article block"}>
                 <h1 className={"trekking-article__title"}>{trekking.title}</h1>
                 <TrekkingShortDescription trekking={trekking}/>
                 <p className={"trekking-article__paragraph"}>{trekking.description}</p>
                 <img className={"trekking-article__img"} src={trekking.image} alt={trekking.title} className={"trekking-card__img"}></img>
                 <div className={"trekking-article__content"} >
                    <h2>Маршрут</h2>
                    {route}
                    <h2>Необходимое снаряжение</h2>
                    <p>{trekking.equipment}</p>
                 </div>
                {button}
                {messageLog}
                {messageSignUp}
            </div>
         )
     }

     handleClick = () => {
        this.props.signUp(this.trekking.id);
     }
}

export default TrekkingArticle