import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState, TodosState } from '../types';

export const state: TodosState = {
  todos: [
    { name: 'To make myself happy', done: true, editing: false, id: 1 },
    { name: 'Buy the car', done: false, editing: false, id: 2 },
    { name: 'Become President of USA', done: false, editing: false, id: 3 },
  ],
};

const namespaced: boolean = true;

export const todos: Module<TodosState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
