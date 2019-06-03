import React from 'react';
import { connect } from 'react-redux';
import { getMyOrdersRequest, deleteOrderRequest } from './actionCreators';
import { format } from 'date-fns';

class MyOrder extends React.Component {
  componentDidMount() {
    this.props.getMyOrders()
  }

  render() {
    const { orders, deleteOrder } = this.props
    return (
      <div className='userOrders'>
        <h2 className='subtitle userOrders-subtitle'>My order </h2>
        <ul className='userOrders-list'>
          {orders.map(item => {
            return (
              <li className='userOrders-list-item' key={item.startDate}>
                {`${item.serviceType}, ${item.serviceComment}, ${format(item.startDate, 'DD/MM/YYYY HH:MM')}`}
                <button className='button button-order_remove' onClick={() => deleteOrder(item.startDate)}> Remove </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getMyOrders: () =>
      dispatch(getMyOrdersRequest()),
    deleteOrder: (startDate) =>
      dispatch(deleteOrderRequest({ startDate }))
  }
}



const mapStateToProps = (state) => ({ orders: state.orders.orders })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrder)