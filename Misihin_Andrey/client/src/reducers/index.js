import { combineReducers } from 'redux';
import equipmentReducer from './equipmentReducer';
import examplesReducer from './examplesReducer';
import modalReducer from './modalReducer';
import usersReducer from './usersReducer';
import ordersReducer from './ordersReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  equipment: equipmentReducer,
  examples: examplesReducer,
  modal: modalReducer,
  user: usersReducer,
  form: formReducer,
  orders: ordersReducer
})