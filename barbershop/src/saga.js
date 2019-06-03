import { all } from 'redux-saga/effects';

import login from 'features/Login/saga'
import app from 'containers/App/saga'


import registration from 'features/Registration/saga'
import newOrder from 'features/NewOrder/saga'
import myOrder from 'features/MyOrder/saga'

export default function* root() {
  yield all([...login,
  ...app,
  ...registration,
  ...newOrder,
  ...myOrder])

}