import React from 'react'

export default class Company extends React.Component {

    render() {

        return (
            <section className="company card">
                <img src="https://randomuser.me/api/portraits/men/33.jpg"/>
                <h3>{this.props.name}</h3>
                <p>{this.props.address}</p>
                <p>{this.props.phone}</p>
                <button className="add-service">Add service</button>
            </section>
        )
    }
}