import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders, deleteOrder } from '../../actions/orders';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchOrders()
  }

  render() {
    const { orders, email, isFetching, deleteOrder } = this.props;

    if (isFetching || isFetching === undefined) {

      return<p>Получение данных...</p> 

    } else {

      return <Profile orders={orders} email={email} deleteOrder={deleteOrder}/>
        
    }
  }
  
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    orders: state.orders.list,
    isFetching: state.orders.isFetching
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
    deleteOrder: (target) => dispatch(deleteOrder(target))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(ProfileContainer);