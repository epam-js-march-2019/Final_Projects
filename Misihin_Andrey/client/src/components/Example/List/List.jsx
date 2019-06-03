import React, { Component, Fragment } from 'react';
import './List.css';
import Card from '../Card/Card';
import { TabLink } from '../..';

class List extends Component {

  componentDidMount() {
    this.props.fetchExamples(this.props.visible);
  }

  render() {
    return (
      <Fragment>
        <ul className="examples-list">
          {this.props.examples.slice(0, this.props.visible).map(
            ({ name, thumb, image }, index) => 
              <li key={index} className="examples__item">
                <Card name={name} thumb={thumb} image={image} />
              </li>
          )}
        </ul>
        {this.props.visible < this.props.examples.length && 
          <TabLink onClick={this.props.showMore}>
            Показать ещё
          </TabLink>
        }
      </Fragment>
    )
  }

}

export default List;