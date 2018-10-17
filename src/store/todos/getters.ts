import { GetterTree } from 'vuex';
import { RootState, TodosState } from '../types';

export const getters: GetterTree<TodosState, RootState> = {
  allTodos: (state) => state.todos,
  doneTodos: (state) => state.todos.filter((todo) => todo.done),
  activeTodos: (state) => state.todos.filter((todo) => !todo.done),
};
