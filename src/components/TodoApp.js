import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="card shadow-lg p-3" style={{ width: "30rem" }}>
      <h2 className="card-title text-center text-primary mb-3">To-Do List</h2>
      <div className="card-body">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default TodoApp;
