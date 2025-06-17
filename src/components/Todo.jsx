import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}

export default Todo;
