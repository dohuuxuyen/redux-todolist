import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, setTodoInput } from "../../redux/actions";
import { todoInputSelector, todosSelector } from "../../redux/selector";

const Todos = () => {
  const todoInput = useSelector(todoInputSelector);
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleTodoInputChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };

  const handleAdd = () => {
    dispatch(addTodos(todoInput));
  };
  console.log(todoInput);
  return (
    <div>
      <input
        value={todoInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleTodoInputChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Todos;
