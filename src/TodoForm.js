import React, { useState } from "react";
import Todolist from "./Todolist";

const TodoForm = ({ Addtodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    checked: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      Addtodo({ ...todo, id: 1 });
      // reset taks input
      setTodo({ ...todo, task: "" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type="submit">Ajouter la tâche</button>
      </form>
    </div>
  );
};

export default TodoForm;
