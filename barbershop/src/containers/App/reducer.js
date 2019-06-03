
import { SETUP_STORE_SUCCESS, LOGOUT_SUCCESS } from './actionsTypes';
import { REGISTRATION_SUCCESS } from 'features/Registration/actionsTypes';
import { LOGIN_SUCCESS } from 'features/Login/actionsTypes';


const initialState = {
  currentUser: {},
}

export function App(state = initialState, action = {}) {

  const { type, payload } = action;

  switch (type) {
    case REGISTRATION_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, currentUser: payload }
    case SETUP_STORE_SUCCESS:
      return { ...state, ...payload }
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}