import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todoList")) || [];
};

export const TodoApp = () => {
  const [todoList, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
      <h1>TodoApp ( {todoList.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todoList={todoList} onDelete={onDelete} onToggle={onToggle} />
        </div>

        <div className="col-5">
          <TodoAdd onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
