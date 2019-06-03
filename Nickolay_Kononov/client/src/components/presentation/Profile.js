import React, {Component} from 'react';
import ReservationElement from "./ReservationElement";
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';


class Profile extends Component{

    componentDidMount() {


    }

    render() {

        let reserveItems = this.props.reservation.map( (reserve, i) => {
            if (this.props.reservation[i].username === this.props.username) {
                return (<li key={i}><ReservationElement data={reserve} service={this.props.service} /></li>);
            }
        });

        return (
            <div>
                <h2>{this.props.username}</h2>
                <div>
                    {this.props.admin ? <Link to={'/submit'}> Добавить услугу </Link> : <p> </p> }
                </div>


                <div>
                    {this.props.username ? <ul>{reserveItems}</ul> : <p>Пожалуйста, авторизируйтесь</p>}
                </div>

            </div>
        )
    }

}

Profile.Proptypes = {
    data: PropTypes.shape( {
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default Profile;
