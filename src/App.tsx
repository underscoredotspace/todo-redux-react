import { generate as shortid } from "shortid";
import React, { useState, FormEvent } from "react";
import { Todo, Todos } from "./types";
import "normalize.css";
import "./App.css";
import TodoItem from "./TodoItem";

const App: React.FC = () => {
  const [todos, setTodos] = useState({} as Todos);
  const [newTodo, setTodo] = useState("");

  const handleNewTodo = (e: FormEvent): void => {
    e.preventDefault();

    if (newTodo.trim().length < 3) {
      return;
    }

    setTodos({ ...todos, ...generateNewTodo(newTodo) });
    setTodo("");
  };

  const handleTodoCompleteChange = (
    todoId: string,
    completed: boolean
  ): void => {
    setTodos({
      ...todos,
      [todoId]: {
        ...todos[todoId],
        completed
      }
    });
  };

  const generateNewTodo = (text: string): Todo => ({
    [shortid()]: { text }
  });

  return (
    <>
      <form className="todo-add" onSubmit={handleNewTodo}>
        <label htmlFor="todo">Todo: </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={newTodo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <hr />

      <ul className="todo-list">
        {Object.keys(todos).map(todoId => (
          <TodoItem
            id={todoId}
            todo={todos[todoId]}
            changeCompleted={handleTodoCompleteChange}
          />
        ))}
      </ul>

      <hr />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
};

export default App;
