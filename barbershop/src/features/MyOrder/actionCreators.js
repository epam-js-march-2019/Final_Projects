import { GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS, GET_MY_ORDERS_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE } from './actionsTypes'

export const getMyOrdersRequest = (payload = {}) => {
  return {
    type: GET_MY_ORDERS_REQUEST,
    payload
  }
}

export const getMyOrdersSuccess = (payload = {}) => {
  return {
    type: GET_MY_ORDERS_SUCCESS,
    payload
  }
}

export const getMyOrdersFailure = (payload = {}) => {
  return {
    type: GET_MY_ORDERS_FAILURE,
    payload
  }
}

export const deleteOrderRequest = (payload = {}) => {
  return {
    type: DELETE_ORDER_REQUEST,
    payload
  }
}

export const deleteOrderSuccess = (payload = {}) => {
  return {
    type: DELETE_ORDER_SUCCESS,
    payload
  }
}

export const deleteOrderFailure = (payload = {}) => {
  return {
    type: DELETE_ORDER_FAILURE,
    payload
  }
}