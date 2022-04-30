import { combineReducers } from "redux";
import todosReducer from "../components/Todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
