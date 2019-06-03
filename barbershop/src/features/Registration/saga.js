import { takeLatest, put } from 'redux-saga/effects'
import { push } from 'connected-react-router';
import { REGISTRATION_REQUEST } from './actionsTypes'
import { registrationSuccess, registrationFailure } from "./actionCreators";

function* registration(action) {
  const { login, email, password } = action.payload;
  try {
    const store = JSON.parse(localStorage.getItem('store'));

    if (!store.users[login]) {
      store.currentUser = { login, email, password }
      store.users[login] = { login, email, password }

      localStorage.setItem('store', JSON.stringify(store))

      yield put(registrationSuccess({ login, email, password }))
      yield put(push('/account'))
    } else {
      alert('User already registered')
    }

  } catch (e) {
    registrationFailure()
    console.log(e)
  }
}

export default [
  takeLatest(REGISTRATION_REQUEST, registration)
]