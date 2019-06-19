import React, {Component} from 'react'
import TrekkingShortDescription from '../TrekkingShortDescription/index.js'
import {Link} from "react-router-dom";

import "./style.css"

class TrekkingCard extends Component {

    render () {
        const {card}=this.props;

        return (
            <div className={"trekking-card block"}>
                <img src={card.image} alt={card.title} className={"trekking-card__img"}></img>
                <h2 className={"trekking-card__title"}>{card.title}</h2>
                <TrekkingShortDescription trekking={card}/>
                <p className={"trekking-card__paragraph"}>{card.description}</p>
                <button className={"trekking-card__button button"}><Link to={`/trekking/${card.id}`}>Продолжить</Link></button>
            </div>
        )
    }

}

export default TrekkingCard
