export const todosSelector = (state) => {
  const remainingTodoInputSelector = state.todos.todos.filter((todo) => {
    return todo.includes(state.filter.search);
  });
  return remainingTodoInputSelector;
};
export const todoInputSelector = (state) => state.todos.todoInput;

export const filterSearchSelector = (state) => state.filter.search;
