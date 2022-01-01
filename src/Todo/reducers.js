import { SET_TODO, ADD_TODO, DELETE_TODO } from './constant';

export const initState = {
  todo: '',
  todos: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TODO:
      return { ...state, todo: payload.name };

    case ADD_TODO:
      return {
        todos: [...state.todos, { id: payload.id, name: payload.name }],
      };

    case DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== payload.id);
      return { ...state, todos: newTodos };

    default:
      throw new Error(`Invalid state: ${type}`);
  }
};

export default reducer;
