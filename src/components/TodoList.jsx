import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
