import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE } from './actionsTypes'

export const registrationRequest = (payload = {}) => {
  return {
    type: REGISTRATION_REQUEST,
    payload
  }
}

export const registrationSuccess = (payload = {}) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload
  }
}

export const registrationFailure = (payload = {}) => {
  return {
    type: REGISTRATION_FAILURE,
    payload
  }
}