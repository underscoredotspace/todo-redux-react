import React from "react";
import { TodoContent } from "./types";
import "./TodoItem.css";
interface TodoItemProps {
  id: string;
  todo: TodoContent;
  changeCompleted: (id: string, completed: boolean) => void;
}

const TodoItem = ({ id, todo, changeCompleted }: TodoItemProps) => (
  <li className="todo-item" key={`todo-${id}`}>
    <input
      type="checkbox"
      name={`todo-${id}`}
      id={`todo-${id}`}
      checked={!!todo.completed}
      onChange={e => changeCompleted(id, !todo.completed)}
    />
    <label htmlFor={`todo-${id}`}>{todo.text}</label>
  </li>
);

export default TodoItem;
