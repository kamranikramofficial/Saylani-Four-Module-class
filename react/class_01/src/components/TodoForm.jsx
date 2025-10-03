import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={value}
        placeholder="Add new todo..."
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
