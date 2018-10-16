import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  MARK_TODO,
  MARK_TODOS,
} from './mutation-types';

Vue.use(Vuex);

const findItem = (state, todo) => {
  const elem = state.todos.find((t) => t.name === todo.name);
  return elem ? elem : {};
};

export default new Vuex.Store({
  state: {
    visibleTodos: [],
    todos: [
      { name: 'Hello', done: true, editing: false },
      { name: 'Bob', done: false, editing: false },
      { name: 'Helen', done: true, editing: false },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    activeTodos: (state) => state.todos.filter((todo) => !todo.done),
  },
  mutations: {
    [ADD_TODO](state, name) {
      const todo = {
        editing: false,
        done: false,
        name,
      }
      state.todos.unshift(todo);
    },
    [REMOVE_TODO](state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    [UPDATE_TODO](state, {todo, newName}) {
      const elem = state.todos.find((t) => t.name === todo.name);
      if (elem) {
        elem.name = newName;
        elem.editing = false;
      }
    },
    [EDIT_TODO](state, todo) {
      const elem = state.todos.find((t) => t.name === todo.name);
      if (elem) {
        elem.editing = true;
      }
    },
    [MARK_TODO](state, todo) {
      const elem = findItem(state, todo);
      elem.done = !elem.done;
    },
    [MARK_TODOS](state, flag: boolean) {
      state.todos.forEach((todo) => todo.done = flag);
    },
  },
  actions: {
    [ADD_TODO]: ({commit}, name: string) => commit('ADD_TODO', name),
    [REMOVE_TODO]: ({commit}, todo: object) => commit('REMOVE_TODO', todo),
    [UPDATE_TODO]: ({commit}, payload: object) => commit('UPDATE_TODO', payload),
    [MARK_TODO]: ({commit}, todo: object) => commit('MARK_TODO', todo),
    [MARK_TODOS]: ({ commit }, flag: boolean) => commit('MARK_TODOS', flag),
    [EDIT_TODO]: ({ commit }, todo) => commit('EDIT_TODO', todo),
  },
  strict: process.env.NODE_ENV !== 'production',
});
