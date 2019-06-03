import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ServiceListing extends Component{
    render() {
        return (
            <div>
                <div><Link to={`/services/${this.props.data._id}`}><b>{this.props.data.name}</b></Link></div>
                <div>{this.props.data.description}</div>
            </div>
        )
    }
}

ServiceListing.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};

export default ServiceListing;