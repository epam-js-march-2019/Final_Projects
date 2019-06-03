import React, { Component} from 'react';
import { connect } from 'react-redux';
import ServiceItem from '../presentation/ServiceItem';
import {fetchServiceItem} from "../../actions/serviceActions";
import ReservationPanel from './ReservationPanel';

class ServiceDescription extends Component{

    componentDidMount(){

        this.props.dispatch(fetchServiceItem(this.props.match.params.id));
    }

    render() {

        return (
            <div>
                <ul>
                    { !this.props.serviceItemLoading ? <div><ServiceItem data={this.props.serviceItem}/> <ReservationPanel reservation={this.props.reservation} id={this.props.serviceItem._id} /></div> : <div> </div> }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        serviceItem: state.service.serviceItem,
        serviceItemLoading: state.service.serviceItemLoading,
        reservation: state.service.serviceItem.reservation
    }
};

export default connect (mapStateToProps)(ServiceDescription);