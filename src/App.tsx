import React, { useState, FormEvent } from "react";

import { addTodo } from "./redux/actions";
import store from "./redux/store";

import TodoItem from "./TodoItem";

import "normalize.css";
import "./App.css";

const App: React.FC = () => {
  const [newTodo, setTodo] = useState("");
  const todos = store.getState().Todos;

  const handleNewTodo = (event: FormEvent): void => {
    event.preventDefault();

    if (newTodo.trim().length < 3) {
      return;
    }

    store.dispatch(addTodo(newTodo));
    setTodo("");
  };

  return (
    <>
      <form className="todo-add" onSubmit={handleNewTodo}>
        <label htmlFor="todo">Todo: </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={newTodo}
          autoComplete="off"
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <hr />

      <ul className="todo-list">
        {Object.keys(todos).map(todoId => (
          <TodoItem id={todoId} todo={todos[todoId]} />
        ))}
      </ul>
    </>
  );
};

export default App;
