import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { createRootReducer } from 'reducer';


const initialState = {};
export const history = createBrowserHistory();
export const sagaMiddleWare = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleWare, createLogger({ duration: true, collapsed: true })]

export const store = createStore(createRootReducer(history), initialState, applyMiddleware(...middlewares))

