import React from "react";

const TodoActions = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  return (
    <div className="task">
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li style={{ textDecoration: todo.checked ? "line-through" : null }}>
        {todo.task}
      </li>
      <button className="remove" onClick={handleRemoveClick}>
        ❌
      </button>
    </div>
  );
};

export default TodoActions;
