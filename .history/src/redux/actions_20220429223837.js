export const searchFilter = (payload) => {
  return {
    type: "Filter/SEARCH_FILTER",
    payload: payload,
  };
};

export const setTodoInput = (payload) => {
  return {
    type: "Todos/SET_TODO_INPUT",
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

export const updateTodos = (payload) => {
  return {
    type: "Todos/UPDATE_TODOS",
    payload: payload,
  };
};
