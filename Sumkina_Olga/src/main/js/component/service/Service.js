import React from 'react'

export default class Service extends React.Component {
    render() {
        console.log(this.props);
        const {name, tax, price} = this.props.service;
        return (
            <article className="service card">
                <h3>{name}</h3>

                <p>Госпошлина: {tax} </p>
                <p>УПТХ: {price} </p>

                <p>Итого: {tax + price}</p>
                <input type="button" value="Заказать"/>
            </article>
        )
    }
}