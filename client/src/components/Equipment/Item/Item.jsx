import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Item.css';
import { ItemExamplesCardList, SpecsTable } from '../../';

class Item extends Component {

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.slug);
    this.props.clearMessage();
  }

  render() {
    const { image, name, description, examples } = this.props.item;
    const { path, url } = this.props.match;
    const handleOrder = this.props.createOrder;
    const message = this.props.message;
    return (
      <section className="equipment">

        <section className="equipment__text">
          <a href={image}>
            <img src={image} alt={name} className="equipment__photo"/>
          </a>
          <section className="equipment__short">
            <h1 className="equipment__name">{name}</h1>
            <p className="equipment__description">{description}</p>

            <button className="equipment_button button" onClick={handleOrder}>
              Записаться
            </button>
            {message && 
              <p className={message.split("")[0] === "В" ? "success" : "error"}>{message}</p>
            }
          </section>

        </section>

        <section className="equipment__tabs">

          {/* <NavLink exact to={`${url}`} className="equipment__sublink">
            Расписание
          </NavLink> */}

          <NavLink to={`${url}/specs`} className="equipment__sublink">
            Основные хар-ки
          </NavLink>

          <NavLink to={`${url}/full-specs`} className="equipment__sublink">
            Полные хар-ки
          </NavLink>

          {examples &&
          <NavLink to={`${url}/examples`} className="equipment__sublink">
            Примеры работ
          </NavLink>}


          <Route path={`${path}/specs`} component={SpecsTable}/>
          <Route path={`${path}/full-specs`} component={SpecsTable}/>
          <Route path={`${path}/examples`} component={ItemExamplesCardList}/>
        </section>

      </section>
    )
  }
}

export default Item;