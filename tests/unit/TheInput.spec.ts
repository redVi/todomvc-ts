import { mutations } from '@/store/todos/mutations';

describe('TheInput.vue', () => {
  it('adds new todo correctly', () => {
    const todos = [
      { name: 'Mike', done: false, editing: false, id: 101 },
    ];
    const state = { todos: [] };

    mutations.ADD_TODO(state, 'Mike');
    expect( state.todos ).toEqual(todos);
  });
});
