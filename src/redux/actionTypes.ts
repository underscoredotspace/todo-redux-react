export const ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const EDIT_TODO = "EDIT_TODO"
export const DELETE_TODO = "DELETE_TODO"

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: string
}

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETED
  payload: string
}

interface EditTodoAction {
  type: typeof EDIT_TODO
  payload: { id: string; text: string }
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: string
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleCompleteAction
  | EditTodoAction
  | DeleteTodoAction
