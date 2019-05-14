import React from "react"
import "./TodoItem.css"

interface TodoItemProps {
  todo: {
    id: string
    text: string
    completed: boolean
  }
  toggleComplete(id: string): void
  editTodo(id: string, text: string): void
  deleteTodo(id: string): void
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { id, text, completed },
  editTodo,
  deleteTodo,
  toggleComplete
}) => (
  <li className="todo-item">
    <label htmlFor={`todo-${id}`}>
      <input
        type="checkbox"
        name={`todo-${id}`}
        id={`todo-${id}`}
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <input
        type="text"
        name="text"
        id={`todo-text-${id}`}
        className="todo-text"
        value={text}
        onChange={e => editTodo(id, e.target.value)}
        onBlur={e => {
          if (!e.target.value) {
            deleteTodo(id)
          }
        }}
      />
    </label>
    <button onClick={() => deleteTodo(id)}>Delete</button>
  </li>
)

export default TodoItem
