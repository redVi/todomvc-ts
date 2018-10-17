import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState, TodosState } from '../types';

export const state: TodosState = {
  todos: [
    { name: 'To make myself happy', done: true, editing: false },
    { name: 'Buy the car', done: false, editing: false },
    { name: 'Become President of USA', done: false, editing: false },
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
