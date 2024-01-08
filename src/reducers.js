// reducers.js

// reducers.js
import { combineReducers } from 'redux';

const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.payload];
    default:
      return state;
  }
};

const initialState = {
  projects: [
    {
      id: '1',
      name: 'Spotify Clone',
      // Other project details
    },
    {
      id: '2',
      name: 'Ping Pong Game',
      // Other project details
    },
    {
      id: '3',
      name: 'Codial',
      // Other project details
    },
    // Add other projects as needed
  ],
};

// Include other reducers as needed
const rootReducer = combineReducers({
  projects: projectsReducer,
  // Add other reducers here
});

export default rootReducer;
