import React, { useState } from "react";
//import { DisplayDay, DisplayMonth, GetDigit } from "./DisplayTime";

import "./App.css";

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;
// destructure the todo so we can use todo.text

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("Enter to do");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="enter your todos here"
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([{ text: "" }]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todo key={index} index={index} todo={item} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
