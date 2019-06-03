

import { takeLatest, put } from 'redux-saga/effects'
import { push } from 'connected-react-router';
import { LOGIN_REQUEST } from './actionsTypes'
import { loginSuccess, loginFailure } from "./actionCreators";

function* login(action) {
  const { login, password } = action.payload;;
  try {
    const store = JSON.parse(localStorage.getItem('store'));
    const user = store.users[login];
    console.log(user, login, password)
    if (user.login === login && user.password === password) {
      store.currentUser = user;
      localStorage.setItem('store', JSON.stringify(store))
      yield put(loginSuccess(user))


      yield put(push('/account'))
    } else {
      alert('invalid login/password or user does not exist')
    }
  } catch (e) {
    loginFailure()
    console.log(e)
  }
}

export default [
  takeLatest(LOGIN_REQUEST, login)
]