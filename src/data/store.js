import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/**
 * Middleware
 */
import thunk from 'redux-thunk';

import appReducer from './combineReducer';

const finalMiddleware = [];
finalMiddleware.push(thunk);

let store;

export function configStore() {
  store = createStore(appReducer, composeWithDevTools(applyMiddleware(...finalMiddleware)));
  return store;
}
