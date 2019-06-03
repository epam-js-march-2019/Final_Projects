import React, { Fragment } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ thumb, name, slug }) {
  return(
    <Fragment>

      <figure className="equipment__card">
        <Link to={`/equipment/${slug}/specs`}>
          <img src={thumb} alt={name} className="equipment__image"/>
          <figcaption className="equipment__caption">
            {name}
          </figcaption>
        </Link>
      </figure>

    </Fragment>
  )
}

export default Card;