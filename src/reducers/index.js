import { combineReducers } from 'redux';

import books from './books';
import cart from './cart';
import filter from './filter';
import login from './login'
export default combineReducers({
  books,
  cart,
	filter,
	login
});
