import React from "react";

const TodoActions = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <li style={{ textDecoration: todo.checked ? "line-through" : null }}>
        {todo.task}
      </li>
      <button>❌</button>
    </div>
  );
};

export default TodoActions;
