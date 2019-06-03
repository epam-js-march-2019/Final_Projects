import React, { Component} from 'react';
import {fetchServiceItem, submitReservation} from '../../actions/serviceActions';
import { connect } from 'react-redux';
import Form from "react-bootstrap/es/Form";
import {Button} from "react-bootstrap";

class CreateReservation extends Component {

    constructor(){
        super();

        this.state = {
            reservation: ''
        };
    }

    updateReservation(event){
        this.setState({
            reservation: event.target.value
        });
    }

    submitReservation(){
        this.props.dispatch(submitReservation(this.props.serviceItemID, this.props.username, {day: this.state.reservation, name: this.props.serviceItem.name}));

        this.setState({
            reservation: ''
        });
    }

    componentDidMount(){
        this.props.dispatch(fetchServiceItem(this.props.serviceItemID));
    }

    render(){


        return (
            <div>
                <h3>Запись</h3>

                <Form.Group>
                    <Form.Label>Записаться</Form.Label>
                    <Form.Control value={this.state.reservation} onChange={this.updateReservation.bind(this)} id="day" type="date" />
                </Form.Group>

                <Button onClick={this.submitReservation.bind(this)} variant="primary" type="submit">
                    Добавить
                </Button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        serviceItem: state.service.serviceItem
    }
};

export default connect(mapStateToProps)(CreateReservation);