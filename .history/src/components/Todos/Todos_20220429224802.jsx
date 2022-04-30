import React from "react";
import { useSelector } from "react-redux";
import { todoInputSelector } from "../../redux/selector";

const Todos = () => {
  const todoInput = useSelector(todoInputSelector);

  const handleTodoInputChange = () => {};
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
