import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodos,
  clearTodos,
  deleteTodos,
  setTodoInput,
  updateTodos,
} from "../../redux/actions";
import { todoInputSelector, todosSelector } from "../../redux/selector";

const Todos = () => {
  const [editTodoInput, setEditTodoInput] = useState(false);
  const [edit, setEdit] = useState("");
  const refTodoInput = useRef();
  const todoInput = useSelector(todoInputSelector);
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  console.log(todos);

  const handleTodoInputChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };

  const handleAdd = () => {
    if (todoInput) dispatch(addTodos(todoInput));
    dispatch(setTodoInput(""));
    refTodoInput.current.focus();
  };
  console.log(todoInput);

  const handleDelete = (index) => {
    if (!editTodoInput) dispatch(deleteTodos(index));
  };

  const handleClear = () => {
    dispatch(clearTodos());
  };

  const handleEdit = (todo, index) => {
    setEditTodoInput(true);
    dispatch(setTodoInput(todo));
    setEdit(index);
    refTodoInput.current.focus();
  };

  const handleUpdate = () => {
    setEditTodoInput(false);
    dispatch(
      updateTodos({
        index: edit,
        value: todoInput,
      })
    );
    dispatch(setTodoInput(""));
  };
  return (
    <div style={{ width: "300px", marginLeft: "45%" }}>
      <input
        style={{ height: "24px", marginRight: "8px" }}
        ref={refTodoInput}
        value={todoInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleTodoInputChange}
      />
      {editTodoInput ? (
        <button style={{ height: "30px" }} onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button style={{ height: "30px" }} onClick={handleAdd}>
          Add
        </button>
      )}
      <p>Todo List: </p>
      <ul style={{ maxWidth: "300px", paddingLeft: 0 }}>
        {todos.map((todo, index) => (
          <li style={{ display: "flex", marginBottom: "20px" }} key={index}>
            <p
              style={{
                flex: "1",
                margin: "0",
                alignSelf: "center",
              }}
            >
              - {todo}
            </p>
            <button
              style={{ marginLeft: "20px", height: "30px" }}
              onClick={() => handleEdit(todo, index)}
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
      {todos.length >= 2 && (
        <button style={{ height: "30px" }} onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Todos;
