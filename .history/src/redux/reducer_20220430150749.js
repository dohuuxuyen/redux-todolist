import { combineReducers } from "redux";
import filterSearchReducer from "../components/Filter/filterSearchReducer";
import todosReducer from "../components/Todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterSearchReducer,
});

export default rootReducer;
