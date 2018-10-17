export interface RootState {
  version: string;
}

export interface Todo {
  name: string;
  done: boolean;
  editing: boolean;
}

export interface TodosState {
  todos: Todo[];
}
