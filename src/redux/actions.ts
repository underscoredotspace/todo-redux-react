import { ADD_TODO, TOGGLE_COMPLETED } from "./actionTypes"

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text
})

export const toggleComplete = (id: string) => ({
  type: TOGGLE_COMPLETED,
  payload: id
})
