// actions.js

// Action types
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_SKILL = 'ADD_SKILL';
export const ADD_CONTACT = 'ADD_CONTACT';

// Action creators
export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const addSkill = (skill) => ({
  type: ADD_SKILL,
  payload: skill,
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});
// actions.js

export const setSkills = (skills) => ({
    type: 'SET_SKILLS',
    payload: skills,
  });
  