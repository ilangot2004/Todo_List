import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center border-0 shadow-sm mb-2 rounded ${
            todo.completed ? "bg-success text-white" : "bg-white"
          }`}
        >
          <span
            className={`flex-grow-1 ${
              todo.completed ? "text-decoration-line-through" : ""
            }`}
            onClick={() => toggleComplete(todo.id)}
            style={{ cursor: "pointer" }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-light btn-sm me-2 shadow-sm"
              onClick={() => toggleComplete(todo.id)}
            >
              <FaCheck />
            </button>
            <button
              className="btn btn-danger btn-sm shadow-sm"
              onClick={() => deleteTodo(todo.id)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
