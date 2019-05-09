import React, { useState, FormEvent } from "react";
import "./App.css";

type Todo = string;
type Todos = Todo[];

const App: React.FC = () => {
  const [todos, setTodos] = useState([] as Todos);
  const [todo, setTodo] = useState("" as Todo);

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault();

    if (todo.trim().length < 3) {
      return;
    }
    const newTodos = [...todos, todo];

    setTodo("");
    setTodos(newTodos);
  };

  return (
    <>
      <form className="todo-add" onSubmit={handleNewTodo}>
        <label htmlFor="todo">Todo: </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <hr />

      <ul className="todo-list">
        {todos.map((todo, ndx) => (
          <li key={`todo-${ndx}`}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
