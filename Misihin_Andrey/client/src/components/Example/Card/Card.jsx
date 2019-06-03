import React from 'react';
import './Card.css';

function Card({ thumb, name, image }) {
  return (
    <figure className="example__card">
      <a href={image}>
        <img src={thumb} alt={name} className="example__image"/>
      </a>
      <figcaption className="example__caption">
        {name}
      </figcaption>
    </figure>
  )
}

export default Card;