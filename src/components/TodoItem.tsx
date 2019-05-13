import React from "react";
import "./TodoItem.css";

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { id, text, completed },
  toggleComplete
}) => (
  <li className="todo-item">
    <input
      type="checkbox"
      name={`todo-${id}`}
      id={`todo-${id}`}
      checked={completed}
      onChange={() => toggleComplete(id)}
    />
    <label htmlFor={`todo-${id}`}>{text}</label>
  </li>
);

export default TodoItem;
