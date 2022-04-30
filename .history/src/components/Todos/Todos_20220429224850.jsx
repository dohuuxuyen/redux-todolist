import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoInput } from "../../redux/actions";
import { todoInputSelector } from "../../redux/selector";

const Todos = () => {
  const todoInput = useSelector(todoInputSelector);
  const dispatch = useDispatch();

  const handleTodoInputChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };
  return (
    <div>
      <input
        value={todoInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleTodoInputChange}
      />
      <button>Add</button>
    </div>
  );
};

export default Todos;
