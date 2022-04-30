const initialState = {
  todoInput: "",
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Todos/SET_TODO_INPUT":
      return {
        ...state,
        todoInput: action.payload,
      };
    case "Todos/ADD_TODOS":
      return {
        ...state,
        todos: [...state.todos],
      };
    default:
      return state;
  }
};

export default todosReducer;
