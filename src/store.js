// store.js



import { createStore } from 'redux';
import { combinedReducers } from './indexx'; // Import combinedReducers

const store = createStore(combinedReducers);

export default store;

