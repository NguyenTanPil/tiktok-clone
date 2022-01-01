import { useReducer } from 'react';
import '../App.css';
import { addTodo, deleteTodo, setTodo } from './actions';
import reducer, { initState } from './reducers';
import logger from './logger';

const randomId = () => {
  return Math.floor(Math.random() * 100);
};

function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { todo, todos } = state;

  const handleSubmit = () => {
    dispatch(addTodo({ id: randomId(), name: todo }));
    dispatch(setTodo({ name: '' }));
  };

  return (
    <div className="App">
      <h3>Todos</h3>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={todo}
        onChange={(e) => dispatch(setTodo({ name: e.target.value }))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo) => {
          const { id, name } = todo;
          return (
            <li key={id} onClick={() => dispatch(deleteTodo({ id }))}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
