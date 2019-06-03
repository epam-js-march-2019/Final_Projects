import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const initialState = {
  examples: {
    list: [],
    visible: 0
  },
  equipment: {
    list: [],
    visible: 0,
    item: {}
  },
  ...loadState()
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState({
    user: store.getState().user
  });
})

export default store;