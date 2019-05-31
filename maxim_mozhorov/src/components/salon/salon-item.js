import React, {Component} from 'react';
import "./styles/salon-item.css";

class SalonItem extends Component{
    render() {
        return (
            <div className="col-sm-6">
                <div className="thumbnail home-block_info_salon-item">
                    <div className="caption text-center">
                        <div className="position-relative">
                            <img src={this.props.data.img} className="img-responsive"/>
                        </div>
                        <h4>{this.props.data.name}</h4>
                        <div className="thumbnail-description smaller">{this.props.data.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalonItem;