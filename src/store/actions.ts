import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  MARK_TODO,
  MARK_TODOS,
  CLEAR_COMPLETED,
} from './mutation-types';

export default {
  [ADD_TODO]: ({ commit }, name: string) => commit('ADD_TODO', name),
  [REMOVE_TODO]: ({ commit }, todo: object) => commit('REMOVE_TODO', todo),
  [UPDATE_TODO]: ({ commit }, payload: object) => commit('UPDATE_TODO', payload),
  [MARK_TODO]: ({ commit }, todo: object) => commit('MARK_TODO', todo),
  [MARK_TODOS]: ({ commit }, flag: boolean) => commit('MARK_TODOS', flag),
  [EDIT_TODO]: ({ commit }, todo) => commit('EDIT_TODO', todo),
  [CLEAR_COMPLETED]: ({ commit }) => commit('CLEAR_COMPLETED'),
};
