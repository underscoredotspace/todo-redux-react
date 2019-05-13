import React, { useState, FormEvent } from "react";

import { addTodo, toggleComplete } from "./redux/actions";
import { connect } from "react-redux";

import { Todos } from "./types";
import TodoItem from "./components/TodoItem";

import "normalize.css";
import "./App.css";

interface AppProps {
  todos: Todos;
  addTodo: any;
  toggleComplete: any;
}

const App = ({ todos, addTodo, toggleComplete }: AppProps) => {
  const [newTodo, setTodo] = useState("");

  const handleNewTodo = (event: FormEvent): void => {
    event.preventDefault();

    if (newTodo.trim().length < 3) {
      return;
    }

    addTodo(newTodo);
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
        {Object.keys(todos).map(id => (
          <TodoItem
            id={id}
            todo={todos[id]}
            toggleComplete={() => toggleComplete(id)}
            key={`todo-${id}`}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: { todos: Todos }) => ({
  todos: state.todos
});

const mapDispatchToProps = { addTodo, toggleComplete };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
