import React from 'react'
import '../../main.css'

export default class Employee extends React.Component {

    render() {

        return (
            <section className="company">
                <img src="https://randomuser.me/api/portraits/men/33.jpg"/>
                <h3>{this.props.firstName}</h3>
                <p>{this.props.lastName}</p>
                <p>{this.props.description}</p>
                <button className="show-more">Подробнее</button>
            </section>
        )
    }
}