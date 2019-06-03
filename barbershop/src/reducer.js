import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { MyOrder } from 'features/MyOrder';
import { App } from 'containers/App';


export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  orders: MyOrder,
  app: App
})
