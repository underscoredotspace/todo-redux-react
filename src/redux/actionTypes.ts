export const ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const EDIT_TODO = "EDIT_TODO"

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

export type TodoActionTypes =
  | AddTodoAction
  | ToggleCompleteAction
  | EditTodoAction
