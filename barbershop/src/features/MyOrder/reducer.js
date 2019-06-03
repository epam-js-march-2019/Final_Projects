
import { GET_MY_ORDERS_SUCCESS, DELETE_ORDER_SUCCESS } from './actionsTypes';

const initialState = {
  orders: []
}

export function MyOrder(state = initialState, action = {}) {

  const { type, payload } = action;

  switch (type) {
    case GET_MY_ORDERS_SUCCESS:
      return { ...state, orders: payload }

    case DELETE_ORDER_SUCCESS:
      return { ...state, orders: payload }
    default:
      return state
  }
}