import { mutations } from '@/store/todos/mutations';

const state = {
  todos: [
    { name: 'Bob', done: true, editing: false, id: 101 },
    { name: 'Taylor', done: false, editing: false, id: 102 },
    { name: 'Mike', done: false, editing: false, id: 103 },
  ]
};

describe('TodoList.vue', () => {
  it('remove todo correctly', () => {
    expect( state.todos ).toHaveLength(3);

    mutations.REMOVE_TODO( state, state.todos[0] );
    expect( state.todos ).toHaveLength(2);
  });

  it('update todo correctly', () => {
    mutations.UPDATE_TODO( state, { todo: state.todos[0], newName: 'Alex' } );
    expect( state.todos ).toHaveLength(2);
    expect( state.todos[0].name ).toEqual('Alex');
  });

  it('mark todo as edited', () => {
    mutations.EDIT_TODO( state, state.todos[0] );
    expect( state.todos[0].editing ).toEqual(true);
  });

  it('mark todo as done', () => {
    mutations.MARK_TODO( state, state.todos[1] );
    expect( state.todos[1].done ).toEqual(true);
  });
});
