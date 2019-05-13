import React from "react"
import "./TodoItem.css"

interface TodoItemProps {
  todo: {
    id: string
    text: string
    completed: boolean
  }
  toggleComplete: (id: string) => void
  editTodo: (id: string, text: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { id, text, completed },
  editTodo,
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
    <label htmlFor={`todo-${id}`} hidden>
      {text}
    </label>
    <input
      type="text"
      name="text"
      id={`todo-text-${id}`}
      className="todo-text"
      value={text}
      onChange={e => editTodo(id, e.target.value)}
    />
  </li>
)

export default TodoItem
