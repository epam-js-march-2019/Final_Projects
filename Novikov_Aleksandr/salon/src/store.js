/*
* Redux is used to store JSON web tokes and handle authorisation
* Far from the best way to do it, but wanted to play with Redux
* Replace with better implementation later
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import authReducer from './reducers/authReducer';

const store = createStore(
	combineReducers({authReducer: authReducer}),
	{
		authReducer: {
			name: sessionStorage.getItem('salon-app-name'),
			token: sessionStorage.getItem('salon-app-token'),
			logged: sessionStorage.getItem('salon-app-logged')
		}
	},
	composeWithDevTools(applyMiddleware(createLogger()))
);

export default store;

