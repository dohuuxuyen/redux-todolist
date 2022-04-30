export const todoInputSelector = (state) => {
  const remainingTodoInputSelector = state.todos.filter((todo) => {
    return todo.includes(state.filter.search);
  });
  return remainingTodoInputSelector;
};
export const todosSelector = (state) => state.todos.todoInput;

export const filterSearchSelector = (state) => state.filter.search;
