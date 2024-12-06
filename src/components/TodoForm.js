import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form className="d-flex align-items-center mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2 shadow-sm"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary shadow-sm">
        <FaPlus />
      </button>
    </form>
  );
}

export default TodoForm;
