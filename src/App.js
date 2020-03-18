import React, { useState } from "react";
import { DisplayDay, DisplayMonth, GetDigit } from "./DisplayTime";

import "./App.css";

function Todo({ todo }) {
  return (
    <div>
      <div className="todo">{todo.text}</div>
    </div>
  );
}

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
      <button className="delete-button">X</button>
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
    <div className="App">
      <div className="date-container">
        <div className="day">
          <DisplayDay></DisplayDay>
        </div>
        <div className="month">
          <DisplayMonth></DisplayMonth>
        </div>
        <div className="date">
          <GetDigit></GetDigit>
        </div>
      </div>
      <h2 className="today">Today</h2>

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
