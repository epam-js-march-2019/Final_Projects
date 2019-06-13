import React from 'react'

export default class Service extends React.Component {
    render() {
        console.log(this.props.service);
        const {title, tax, description, price} = this.props.service;
        return (
            <article className="service card">
                <h3>{title}</h3>
                <div>
                    <p>{description}</p>
                    <p>Госпошлина: {tax} </p>
                    <p>УПТХ: {price} </p>
                    <p>Итого: {tax + price}</p>
                </div>
                <input type="button" value="Заказать"/>
            </article>
        )
    }
}