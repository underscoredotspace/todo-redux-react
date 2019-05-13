import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  EDIT_TODO,
  DELETE_TODO
} from "./actionTypes"

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text
})

export const toggleComplete = (id: string) => ({
  type: TOGGLE_COMPLETED,
  payload: id
})

export const editTodo = (id: string, text: string) => ({
  type: EDIT_TODO,
  payload: { id, text }
})

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: id
})
