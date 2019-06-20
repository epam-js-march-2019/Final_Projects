import React, {Component}  from 'react'
import TrekkingCard from '../TrekkingCard'

import "./style.css"


class TrekkingCardList extends Component  {

    constructor (props) {
        super(props);

        const {cards}=this.props;

        this.state = {
            visibleCards: cards.slice(0, 4),
            prevPropsCards: cards
        }

    }


    static getDerivedStateFromProps(props, state) {
        if(props.cards!== state.prevPropsCards) {
            const {cards}=props;
            console.log (cards, "getDerived");
            return({visibleCards: cards.slice(0, 4), prevPropsCards: cards});
        }
        return null;
    }

    render () {

        const {visibleCards}=this.state;
        const {cards}=this.props;

        const cardComponents = visibleCards.map(item =>
            <li key={item.id} className={"card-list__item"}>< TrekkingCard card={item}/></li>
        );

        const button = visibleCards.length!==cards.length ?
            <button className={"card-list-button button"} onClick={this.handleClick}>Показать ещё</button> :
            null;

        return (
            <div className={"card-list"}>
                <ul className={"card-list__inner"}>
                    {cardComponents}
                </ul>
                {button}
            </div>
        )

    }

    handleClick = () => {
        const {cards}=this.props;
        const {visibleCards}=this.state;

        this.setState({visibleCards: cards.slice(0, visibleCards.length+4)});
    }
}



export default TrekkingCardList