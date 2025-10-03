import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        margin: "10px 0",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
