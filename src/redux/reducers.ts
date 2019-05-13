import { generate as shortid } from "shortid";
import { Todo, Todos as TodosType } from "../types";
import { ADD_TODO, TOGGLE_COMPLETED, TodoActionTypes } from "./actionTypes";
import { combineReducers } from "redux";

const generateNewTodo = (text: string): Todo => ({
  [shortid()]: { text, completed: false }
});

const todos = (
  state: TodosType = {} as TodosType,
  action: TodoActionTypes
): TodosType => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        ...generateNewTodo(action.payload)
      };

    case TOGGLE_COMPLETED:
      const id = action.payload;
      const todo = state[id];

      return {
        ...state,
        [id]: {
          ...todo,
          completed: !todo.completed
        }
      };
  }

  return { ...state };
};

export default combineReducers({ todos });
