import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, setTodoInput } from "../../redux/actions";
import { todoInputSelector, todosSelector } from "../../redux/selector";

const Todos = () => {
  const todoInput = useSelector(todoInputSelector);
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  console.log(todos);

  const handleTodoInputChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };

  const handleAdd = () => {
    dispatch(addTodos(todoInput));
  };
  console.log(todoInput);

  const handleDelete = () => {
    dispatch(deleteTodos());
  };
  return (
    <div>
      <input
        value={todoInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleTodoInputChange}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
