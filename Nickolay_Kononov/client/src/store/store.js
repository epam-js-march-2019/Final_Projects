import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import serviceReducer from '../reducers/serviceReducer';
import authReducer from '../reducers/authReducer';


const store = createStore(
    combineReducers({
        service: serviceReducer,
        auth: authReducer,

    }),
    applyMiddleware(
        thunk
    )
);

export default store;