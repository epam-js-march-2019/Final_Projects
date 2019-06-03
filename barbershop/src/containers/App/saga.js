import { takeLatest, put } from 'redux-saga/effects'
import { push } from 'connected-react-router';
import { SETUP_STORE_REQUEST, LOGOUT_REQUEST } from './actionsTypes'
import { setupStoreFailure, setupStoreSuccess, logoutSuccess, logoutFailure } from "./actionCreators";

function* setupStore() {
  try {
    if (!localStorage.getItem('store')) {
      localStorage.setItem('store', JSON.stringify({ currentUser: {}, users: {}, orders: [] }))
    }


    const { currentUser } = JSON.parse(localStorage.getItem('store'));

    yield put(setupStoreSuccess({ currentUser }))
  } catch (e) {
    yield put(setupStoreFailure())
    console.log(e)
  }
}


function* logOut() {
  try {
    const store = JSON.parse(localStorage.getItem('store'));
    store.currentUser = {}
    localStorage.setItem('store', JSON.stringify(store))

    yield put(logoutSuccess())
    yield put(push('/homepage'))
  } catch (e) {
    yield put(logoutFailure())

  }
}

export default [
  takeLatest(SETUP_STORE_REQUEST, setupStore),
  takeLatest(LOGOUT_REQUEST, logOut)
]