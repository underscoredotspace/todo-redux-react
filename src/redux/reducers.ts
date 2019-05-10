import { generate as shortid } from "shortid";
import { Todo, Todos as TodosType } from "../types";
import { ADD_TODO, TodoActionTypes } from "./actionTypes";
import { combineReducers } from "redux";

const generateNewTodo = (text: string): Todo => ({
  [shortid()]: { text }
});

const Todos = (
  state: TodosType = {} as TodosType,
  action: TodoActionTypes
): TodosType => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        ...generateNewTodo(action.payload)
      };
    default:
      return state;
  }
};

export default combineReducers({ Todos });
