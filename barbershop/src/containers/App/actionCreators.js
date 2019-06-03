import { SETUP_STORE_REQUEST, SETUP_STORE_SUCCESS, SETUP_STORE_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './actionsTypes'

export const setupStoreRequest = (payload = {}) => {
  return {
    type: SETUP_STORE_REQUEST,
    payload
  }
}

export const setupStoreSuccess = (payload = {}) => {
  return {
    type: SETUP_STORE_SUCCESS,
    payload
  }
}

export const setupStoreFailure = (payload = {}) => {
  return {
    type: SETUP_STORE_FAILURE,
    payload
  }
}


export const logoutRequest = (payload = {}) => {
  return {
    type: LOGOUT_REQUEST,
    payload
  }
}

export const logoutSuccess = (payload = {}) => {
  return {
    type: LOGOUT_SUCCESS,
    payload
  }
}

export const logoutFailure = (payload = {}) => {
  return {
    type: LOGOUT_FAILURE,
    payload
  }
}