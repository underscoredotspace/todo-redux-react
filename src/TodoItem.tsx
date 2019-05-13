import React from "react";
import { toggleComplete } from "./redux/actions";
import store from "./redux/store";

import { TodoContent } from "./types";
import "./TodoItem.css";
interface TodoItemProps {
  id: string;
  todo: TodoContent;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, todo }) => (
  <li className="todo-item">
    <input
      type="checkbox"
      name={`todo-${id}`}
      id={`todo-${id}`}
      checked={todo.completed}
      onChange={e => store.dispatch(toggleComplete(id))}
    />
    <label htmlFor={`todo-${id}`}>{todo.text}</label>
  </li>
);

export default TodoItem;
