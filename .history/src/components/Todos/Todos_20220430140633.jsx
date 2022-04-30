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
    <div style={{ width: "300px", marginLeft: "45%" }}>
      <input
        style={{ height: "24px" }}
        ref={refTodoInput}
        value={todoInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleTodoInputChange}
      />
      <button style={{ height: "30px" }} onClick={handleAdd}>
        Add
      </button>
      <ul style={{ maxWidth: "300px", paddingLeft: 0 }}>
        {todos.map((todo, index) => (
          <li style={{ display: "flex", marginBottom: "20px" }} key={index}>
            <p style={{ flex: "1", margin: "0", alignSelf: "center" }}>
              - {todo}
            </p>
            <button
              style={{ marginLeft: "20px", height: "30px" }}
              onClick={() => handleDelete(index)}
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "20px", height: "30px" }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
