import React, { useState, FormEvent } from "react";

import { addTodo } from "./redux/actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { Todos } from "./types";
import TodoItem from "./TodoItem";

import "normalize.css";
import "./App.css";

interface AppProps {
  todos: Todos;
  dispatch: Dispatch;
}

const App = ({ todos, dispatch }: AppProps) => {
  const [newTodo, setTodo] = useState("");

  const handleNewTodo = (event: FormEvent): void => {
    event.preventDefault();

    if (newTodo.trim().length < 3) {
      return;
    }

    dispatch(addTodo(newTodo));
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
          <TodoItem id={todoId} todo={todos[todoId]} key={`todo-${todoId}`} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ todos }: { todos: Todos }) => ({
  todos
});

export default connect(mapStateToProps)(App);
