import React from 'react'
import TrekkingCard from '../TrekkingCard'

import "./style.css"

function TrekkingCardList (props) {
    const {cards}=props;

    console.log(props);

    const cardComponents = cards.map(item =>
        <li key={item.id} className={"card-list__item"}>< TrekkingCard card={item} /></li>
    );

    return (
        <div className={"card-list__container"}>
            <ul className={"card-list"}>
                {cardComponents}
            </ul>
            <button className={"card-list-button button"}>Показать ещё</button>
        </div>
    )
}



export default TrekkingCardList