import React from "react";
import TodoActions from "./TodoActions";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="lists">
      <ul className="todos">
        {todos
          .filter((todo) => !todo.checked)
          .map((todo) => (
            <TodoActions
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))}
      </ul>
      <ul className="done">
        {todos
          .filter((todo) => todo.checked)
          .map((todo) => (
            <TodoActions
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
