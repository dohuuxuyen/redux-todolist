export const setTodoInput = (payload) => {
  return {
    type: "TodoInput/SET_TODO_INPUT",
    payload: payload,
  };
};

export const addTodos = (payload) => {
  return {
    type: "Todos/ADD_TODOS",
    payload: payload,
  };
};

export const deleteTodos = (payload) => {
  return {
    type: "Todos/DELETE_TODOS",
    payload: payload,
  };
};

export const clearTodos = (payload) => {
  return {
    type: "Todos/CLEAR_TODOS",
    payload: payload,
  };
};
