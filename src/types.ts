export interface TodoContent {
  text: string;
  completed?: boolean;
}

export interface Todos {
  [id: string]: TodoContent;
}

export interface Todo extends Todos {}
