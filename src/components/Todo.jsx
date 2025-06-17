import React, { useState } from "react";

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
      {console.log(todos)}
    </div>
  );
}

export default Todo;
