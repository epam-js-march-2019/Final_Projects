import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom';

import {trekkingAPI} from '../../trekkingApi'

import "./style.css";
import "../../style/style.css";

class Profile extends Component {

    render (){
        const {user}= this.props;

        const findTrekking = (id) => {
            return trekkingAPI.all().filter(item=>item.id==id)[0];
        }

        const trekking = user.trekking.map((id) => {return <li key={id}><Link to={`/trekking/${id}`}>{findTrekking(id).title}</Link></li>});

        return (
            <div className={"profile"}>
                <h1>Ваш личный кабинет</h1>
                <p>Ваше имя: {user.name}</p>
                <p>Вы записаны на походы:</p>
                <ul>
                    {trekking}
                </ul>
             <button onClick={this.handleClick} className={"profile__button button"}>Log out</button>
        </div>
        )
    }

    handleClick=() => {
        this.props.logOut();
    }

}

export default Profile