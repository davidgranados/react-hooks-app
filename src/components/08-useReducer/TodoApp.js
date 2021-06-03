import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };

  const onToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const onAdd = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
        </div>

        <div className="col-5">
          <TodoAdd onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
