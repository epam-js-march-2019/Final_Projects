import { NEWORDER_REQUEST, NEWORDER_SUCCESS, NEWORDER_FAILURE } from './actionsTypes'

export const newOrderRequest = (payload = {}) => {
  return {
    type: NEWORDER_REQUEST,
    payload
  }
}

export const newOrderSuccess = (payload = {}) => {
  return {
    type: NEWORDER_SUCCESS,
    payload
  }
}

export const newOrderFailure = (payload = {}) => {
  return {
    type: NEWORDER_FAILURE,
    payload
  }
}