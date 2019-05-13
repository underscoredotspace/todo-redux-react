import React from "react"

import * as todoActions from "./redux/actions"
import { connect } from "react-redux"

import { Todos } from "./types"
import { TodoItem, TodoAdd } from "./components"

import "./App.css"

interface AppProps {
  todos: Todos
  addTodo: any
  toggleComplete: any
  editTodo: any
}

const App = ({ todos, addTodo, toggleComplete, editTodo }: AppProps) => (
  <>
    <TodoAdd addTodo={addTodo} />

    <ul className="todo-list">
      {Object.entries(todos).map(([id, todo]) => (
        <TodoItem
          todo={{ id, ...todo }}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          key={`todo-${id}`}
        />
      ))}
    </ul>
  </>
)

const mapStateToProps = (state: { todos: Todos }) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
  { ...todoActions }
)(App)
