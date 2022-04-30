export const todoInputSelector = (state) => {
  const remainingTodoInputSelector = state.todos.todoInput.filter((todo) => {
    return todo.includes(state.filter.search);
  });
  return remainingTodoInputSelector;
};
export const todosSelector = (state) => state.todos.todos;

export const filterSearchSelector = (state) => state.filter.search;
