import { generate as shortid } from "shortid"
import { Todos } from "../types"
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  TodoActionTypes,
  EDIT_TODO
} from "./actionTypes"
import { combineReducers } from "redux"

const generateNewTodo = (text: string): Todos => ({
  [shortid()]: { text, completed: false }
})

const todos = (state: Todos = {}, action: TodoActionTypes): Todos => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        ...generateNewTodo(action.payload) // makes this reducer impure. should be dependency injection?
      }
    }
    case TOGGLE_COMPLETED: {
      const id = action.payload
      const todo = state[id]

      return {
        ...state,
        [id]: {
          ...todo,
          completed: !todo.completed
        }
      }
    }

    case EDIT_TODO: {
      const { id, text } = action.payload
      const todo = state[id]

      return {
        ...state,
        [id]: {
          ...todo,
          text
        }
      }
    }
  }

  return { ...state }
}

export default combineReducers({ todos })
