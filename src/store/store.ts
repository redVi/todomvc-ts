import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  MARK_TODO,
  MARK_TODOS,
  CLEAR_COMPLETED,
} from './mutation-types';

Vue.use(Vuex);

const findItem = (state, todo) => {
  const elem = state.todos.find((t) => t.name === todo.name);
  return elem ? elem : {};
};

export default new Vuex.Store({
  state: {
    todos: [
      { name: 'To make myself happy', done: true, editing: false },
      { name: 'Buy the car', done: false, editing: false },
      { name: 'Become President of USA', done: false, editing: false },
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
      };

      state.todos.unshift(todo);
    },
    [REMOVE_TODO](state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    [UPDATE_TODO](state, {todo, newName}) {
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
  },
  actions: {
    [ADD_TODO]: ({commit}, name: string) => commit('ADD_TODO', name),
    [REMOVE_TODO]: ({commit}, todo: object) => commit('REMOVE_TODO', todo),
    [UPDATE_TODO]: ({commit}, payload: object) => commit('UPDATE_TODO', payload),
    [MARK_TODO]: ({commit}, todo: object) => commit('MARK_TODO', todo),
    [MARK_TODOS]: ({commit}, flag: boolean) => commit('MARK_TODOS', flag),
    [EDIT_TODO]: ({commit}, todo) => commit('EDIT_TODO', todo),
    [CLEAR_COMPLETED]: ({commit}) => commit('CLEAR_COMPLETED'),
  },
  strict: process.env.NODE_ENV !== 'production',
});
