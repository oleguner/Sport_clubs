import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { clubsReducer } from './clubsReducer';

const rootReducer = combineReducers({
  clubs: clubsReducer
});

const initialState = {};

const middeware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middeware)
);

export default store;
