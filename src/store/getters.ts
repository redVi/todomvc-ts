export default {
  allTodos: (state) => state.todos,
  doneTodos: (state) => state.todos.filter((todo) => todo.done),
  activeTodos: (state) => state.todos.filter((todo) => !todo.done),
};
