// indexx.js

import { combineReducers } from 'redux';
import rootReducer from './reducers';

const combinedReducers = combineReducers({
  portfolio: rootReducer,
  // Add other reducers if needed
});

export { combinedReducers };
