import React, { Component, Fragment } from 'react';
import './List.css';
import Card from '../Card/Card';
import { TabLink } from '../..'

class List extends Component {

  componentDidMount() {
    this.props.fetchEquipment(this.props.visible);
  }

  render() {
    return (
      <Fragment>
        <ul className="equipment-list">
          {this.props.equipment.slice(0, this.props.visible).map(
            ({ _id, name, thumb, slug }) => 
              <li key={_id} className="equipment__item">
                  <Card name={name} thumb={thumb} slug={slug} match={this.props.match}/>
              </li>
          )}
        </ul>
        {this.props.visible < this.props.equipment.length && 
          <TabLink onClick={this.props.showMore}>
            Показать ещё
          </TabLink>
        }
      </Fragment>
    )
  }

}

export default List;