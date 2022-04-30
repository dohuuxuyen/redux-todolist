import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, setTodoInput } from "../../redux/actions";
import { todoInputSelector, todosSelector } from "../../redux/selector";

const Todos = () => {
  const refTodoInput = useRef();
  const todoInput = useSelector(todoInputSelector);
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  console.log(todos);

  const handleTodoInputChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };

  const handleAdd = () => {
    dispatch(addTodos(todoInput));
    dispatch(setTodoInput(""));
    refTodoInput.current.focus();
  };
  console.log(todoInput);

  const handleDelete = (index) => {
    dispatch(deleteTodos(index));
  };
  return (
    <div style={{ width: "200px", marginLeft: "45%" }}>
      <input
        ref={refTodoInput}
        value={todoInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleTodoInputChange}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ width: "400px", paddingLeft: 0 }}>
        {todos.map((todo, index) => (
          <li style={{ display: "flex" }} key={index}>
            <p style={{ flex: "1" }}>- {todo}</p>
            <button style={{}} onClick={() => handleDelete(index)}>
              Edit
            </button>
            <button style={{}} onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
