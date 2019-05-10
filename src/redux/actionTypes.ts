export const ADD_TODO = "ADD_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export type TodoActionTypes = AddTodoAction;
