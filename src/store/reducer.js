import { SET_TODO, ADD_TODO, DELETE_TODO } from './constant';

const initState = {
  todos: [],
  todoInput: '',
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO:
      return { ...state, todoInput: payload };

    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };

    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(payload, 1);
      return { ...state, todos: newTodos };

    default:
      throw new Error(`Invalid action ${type}`);
  }
}

export { initState };
export default reducer;
