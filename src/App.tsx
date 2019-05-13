import React from "react"

import { addTodo, toggleComplete } from "./redux/actions"
import { connect } from "react-redux"

import { Todos } from "./types"
import { TodoItem, TodoAdd } from "./components"

import "./App.css"

interface AppProps {
  todos: Todos
  addTodo: any
  toggleComplete: any
}

const App = ({ todos, addTodo, toggleComplete }: AppProps) => (
  <>
    <TodoAdd addTodo={addTodo} />

    <ul className="todo-list">
      {Object.entries(todos).map(([id, todo]) => (
        <TodoItem
          todo={{ id, ...todo }}
          toggleComplete={toggleComplete}
          key={`todo-${id}`}
        />
      ))}
    </ul>
  </>
)

const mapStateToProps = (state: { todos: Todos }) => ({
  todos: state.todos
})

const mapDispatchToProps = { addTodo, toggleComplete }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
