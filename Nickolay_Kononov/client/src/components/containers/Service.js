import React, {Component} from 'react';
import ServiceListing from '../presentation/ServiceListing';
import {connect} from 'react-redux';
import {fetchService} from "../../actions/serviceActions";

class Service extends Component{

    componentDidMount() {

        this.props.dispatch(fetchService());



    }

    render() {
        const serviceOne = this.props.service.map( (service, i) => {
            return ( <li key={i}><ServiceListing data = {service} /></li> );
        });


        return (
            <div>
                <h2>Услуги</h2>
                {(this.props.service.length > 0)? <ul> {serviceOne} </ul> : <div> Извините, мы пока закрыты </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        service: state.service.service
    }
};

export default connect(mapStateToProps)(Service);