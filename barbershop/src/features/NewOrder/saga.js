import { takeLatest, put} from 'redux-saga/effects'
import { push } from 'connected-react-router';
import { NEWORDER_REQUEST } from './actionsTypes'
import { newOrderSuccess, newOrderFailure } from "./actionCreators";

function* newOrder(action) {
  const { serviceType, serviceComment, startDate } = action.payload;
  try {
    const store = JSON.parse(localStorage.getItem('store'));

    const user = store.currentUser;
    const orders = store.orders

    const ordersIntersection = orders.filter(order => order.startDate === startDate)

    if (!ordersIntersection.length) {
      const order = { serviceType, serviceComment, startDate, login: user.login }

      store.orders = [...store.orders, order]

      localStorage.setItem('store', JSON.stringify(store))

      yield put(newOrderSuccess(order))
      yield put(push('/account/my-order'))
      alert('Congratulations, your order successfully created, we will contact you for further instructions')
    } else {
      alert('your order is not created')
    }

  } catch (e) {
    newOrderFailure()
    console.log(e)
  }
}

export default [
  takeLatest(NEWORDER_REQUEST, newOrder)
]