import React from 'react'
import Service from './Service.js'

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {props};
    }

    render() {
        console.log(this.props);
        return (
            <section className="service-list">
                {this.state.map((item, index) => {
                    return <Service key={index} service={item}/>
                })}
            </section>
        )
    }

}