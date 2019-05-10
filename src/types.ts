export interface TodoContent {
  text: string;
  completed?: boolean;
}

export type Todos = Record<string, TodoContent>;

export interface Todo extends Todos {}
