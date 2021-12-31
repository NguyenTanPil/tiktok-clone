import './App.css';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'js',
  },
  {
    id: 2,
    name: 'react',
  },
  {
    id: 3,
    name: 'node',
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log(checked);
  };

  return (
    <div className="App">
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(course.id)}
              checked={checked.includes(course.id)}
            />
            <label htmlFor="">{course.name}</label>
          </div>
        );
      })}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
