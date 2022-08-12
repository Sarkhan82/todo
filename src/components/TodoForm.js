import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
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
      addTodo({ ...todo, id: uuidv4() });
      // reset taks input
      setTodo({ ...todo, task: "" });
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="addtask"
          name="task"
          type="text"
          placeholder="Entrez votre tâche"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button className="add" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
