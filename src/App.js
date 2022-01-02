import './App.css';
import { useStore, actions } from './store';

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handldAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodo(''));
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={todoInput}
        onChange={(e) => dispatch(actions.setTodo(e.target.value))}
      />
      <button onClick={handldAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} onClick={() => dispatch(actions.deleleTodo(index))}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
