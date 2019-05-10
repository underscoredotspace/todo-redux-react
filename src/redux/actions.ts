import { ADD_TODO } from "./actionTypes";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text
});
