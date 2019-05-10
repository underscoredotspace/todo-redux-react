import React from "react";
import { TodoContent } from "./types";
import "./TodoItem.css";
interface TodoItemProps {
  id: string;
  todo: TodoContent;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, todo }) => (
  <li className="todo-item" key={`todo-${id}`}>
    <input
      type="checkbox"
      name={`todo-${id}`}
      id={`todo-${id}`}
      checked={!!todo.completed}
    />
    <label htmlFor={`todo-${id}`}>{todo.text}</label>
  </li>
);

export default TodoItem;
