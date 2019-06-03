

import { takeLatest, put } from 'redux-saga/effects'
import { GET_MY_ORDERS_REQUEST } from './actionsTypes'
import { getMyOrdersSuccess, getMyOrdersFailure } from './actionCreators';
import { DELETE_ORDER_REQUEST } from './actionsTypes';
import { deleteOrderSuccess, deleteOrderFailure } from './actionCreators';

function* getMyOrders() {
  try {
    const store = JSON.parse(localStorage.getItem('store'));
    const user = store.currentUser;
    const orders = store.orders;

    const userOrders = orders.filter(order => order.login === user.login)

    yield put(getMyOrdersSuccess(userOrders))

  } catch (e) {
    getMyOrdersFailure()
    console.log(e)
  }
}

function* deleteMyOrder(action) {
  const { startDate } = action.payload;
  try {
    const store = JSON.parse(localStorage.getItem('store'));

    const user = store.currentUser;

    const orders = store.orders;

    const updatedOrders = orders.filter(item => item.startDate !== startDate);

    store.orders = updatedOrders;

    const userUpdatedOrders = updatedOrders.filter(order => order.login === user.login)


    localStorage.setItem('store', JSON.stringify(store))

    yield put(deleteOrderSuccess(userUpdatedOrders))

  }
  catch (e) {
    deleteOrderFailure()
    console.log(e)
  }
}


export default [
  takeLatest(GET_MY_ORDERS_REQUEST, getMyOrders),
  takeLatest(DELETE_ORDER_REQUEST, deleteMyOrder)
]