import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ServiceItem extends Component{

    render() {
        return (
            <div>
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.body}</p>
            </div>
        )
    }
}

ServiceItem.propTypes = {

    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

export default ServiceItem;