import { MutationTree } from 'vuex';
import { TodosState } from '../types';

import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  MARK_TODO,
  MARK_TODOS,
  CLEAR_COMPLETED,
} from '../constants';

let id = 100;

const findItem = (state, todo) => {
  const elem = state.todos.find((t) => t.name === todo.name);
  return elem ? elem : {};
};

export const mutations: MutationTree<TodosState> = {
  [ADD_TODO](state, name) {
    state.todos.unshift({
      editing: false,
      done: false,
      name,
      id: id += 1,
    });
  },
  [REMOVE_TODO](state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  [UPDATE_TODO](state, { todo, newName }) {
    const elem = findItem(state, todo);
    elem.name = newName;
    elem.editing = false;
  },
  [EDIT_TODO](state, todo) {
    const elem = findItem(state, todo);
    elem.editing = true;
  },
  [MARK_TODO](state, todo) {
    const elem = findItem(state, todo);
    elem.done = !elem.done;
  },
  [MARK_TODOS](state, flag: boolean) {
    state.todos.forEach((todo) => todo.done = flag);
  },
  [CLEAR_COMPLETED](state) {
    state.todos = state.todos.filter((todo) => !todo.done);
  },
};
