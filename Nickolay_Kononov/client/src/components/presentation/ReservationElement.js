import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ReservationElement extends Component {
    render(){

        const date = this.props.data.day.split(" ");
        let newDate = [].concat(date[1], date[2], date[3]).join(' ');


        return (
            <div>
                <div>{ this.props.service? <div>{this.props.data.name}</div>: <div><b>{this.props.data.username}</b></div> }</div>
                <div>{this.props.data.day}</div>

            </div>
        )
    }
}


ReservationElement.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        name: PropTypes.string
    })
};

export default ReservationElement;