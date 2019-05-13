import React from "react";
import { TodoContent } from "../types";
import "./TodoItem.css";

interface TodoItemProps {
  id: string;
  todo: TodoContent;
  toggleComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, todo, toggleComplete }) => (
  <li className="todo-item">
    <input
      type="checkbox"
      name={`todo-${id}`}
      id={`todo-${id}`}
      checked={todo.completed}
      onChange={_ => toggleComplete()}
    />
    <label htmlFor={`todo-${id}`}>{todo.text}</label>
  </li>
);

export default TodoItem;
