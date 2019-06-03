import React, { Component} from 'react';
import ReservationElement from '../presentation/ReservationElement';
import CreateReservation from '../presentation/CreateReservation';


class ReservationPanel extends Component {

    render(){
        const reserveItems = this.props.reservation.map( (reserve, i) => {
            return ( <li key={i}><ReservationElement data = {reserve} /></li> );
        });

        return (
            <div>
                <h2>Записи</h2>
                <ul>
                    {(this.props.reservation.length > 0) ? <ul>{reserveItems}</ul> : <div>Нет записей</div>}
                </ul>
                <CreateReservation serviceItemID={this.props.id}/>
            </div>
        )
    }
}

export default ReservationPanel;