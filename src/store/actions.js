import { SET_TODO, ADD_TODO, DELETE_TODO } from './constant';

export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleleTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
