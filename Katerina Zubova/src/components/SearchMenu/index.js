import React, {Component} from 'react'
import {trekkingAPI} from '../../trekkingApi'
import SearchBar from "../SearchBar/index.js";

import "./style.css"

class SearchMenu extends Component {

    state = {
        region: "",
        type: ""
    };

    render () {
        const cards = trekkingAPI.all();
        return (
            <div className={"search-menu"}>
                <div className={"search-menu__background"}>
                    <ul className={"search-menu__list"}>
                         <li key={"region"} className={"search-menu__item"}><SearchBar title={'Регион'}  name="region" list={cards.map(card=>card.region)} updateData={this.updateData}/></li>
                         <li key={"type"} className={"search-menu__item"}><SearchBar title={'Тип'}  name="type" list={cards.map(card=>card.type)} updateData={this.updateData}/></li>
                    </ul>
                    <button className={"search-menu__button"} onClick={this.sortCards}>Найти</button>
                </div>
            </div>
        )
    }

    updateData = (value, name) => {
        this.setState({ [name]: value })
    }

    sortCards = () => {

        const cards = trekkingAPI.all();

        const {region, type}=this.state;

        const sortedCards = cards.filter ((card)=>  {
            return ((card.region===region || region==='') &&
                (card.type===type || type===''))
        })


        console.log(sortedCards);
        this.props.displayCards(sortedCards);
    }
}

export default SearchMenu