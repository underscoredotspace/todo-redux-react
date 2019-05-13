export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETED;
  payload: string;
}

export type TodoActionTypes = AddTodoAction | ToggleCompleteAction;
