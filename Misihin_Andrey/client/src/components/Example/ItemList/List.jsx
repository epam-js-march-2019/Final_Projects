import React, { Fragment } from 'react';
import '../List/List.css';
import Card from '../Card/Card';

function List({ item }) {
  console.log(item)
  return (
    <Fragment>
      {item["examples"] &&
      <ul className="examples-list">
        {item["examples"].map(
          ({ name, thumb, image }, index) => 
            <li key={index} className="examples__item">
              <Card name={name} thumb={thumb} image={image} />
            </li>
        )}
      </ul>}
    </Fragment>
  )
}


export default List;