import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import NewOrder from 'features/NewOrder';
import MyOrder from 'features/MyOrder';

class Account extends React.Component {
  render() {
    return (
      <div className='account'>
        <div className='account-container'>
          <div className='account-wrapper'>
            <div className='account-item'>My orders</div>
            <NavLink className='navlinks-link_button' activeClassName="active-button" to="/account/my-order">Show</NavLink>
          </div>
          <div className='account-wrapper'>
            <div className='account-item'>Create new order</div>
            <NavLink className='navlinks-link_button' activeClassName="active-button" to="/account/new-order">Add</NavLink>
          </div>
        </div>
        <Switch>
          <Route path='/account/my-order' component={MyOrder} />
          <Route path='/account/new-order' component={NewOrder} />
        </Switch>
      </div>

    )
  }
}

export default Account