import React, { FormEvent, useState } from "react"

interface TodoAddProps {
  addTodo(text: string): void
}

const TodoAdd: React.FC<TodoAddProps> = ({ addTodo }) => {
  const [newTodo, setTodo] = useState("")

  const handleNewTodo = (event: FormEvent): void => {
    event.preventDefault()

    if (newTodo.trim().length < 3) {
      return
    }

    addTodo(newTodo)
    setTodo("")
  }

  return (
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
  )
}

export default TodoAdd
