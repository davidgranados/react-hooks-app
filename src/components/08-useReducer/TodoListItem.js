import React from "react";
import classNames from "classnames";

export const TodoListItem = ({ todo, index, onDelete, onToggle }) => {
  const handleDelete = ({ target }) => {
    onDelete(parseInt(target.dataset.id));
  };
  const handleToggle = ({ target }) => {
    onToggle(parseInt(target.dataset.id));
  };
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={classNames({ complete: todo.done })}
        data-id={todo.id}
        onClick={handleToggle}
      >
        {index}. {todo.desc}
      </p>
      <button
        className="btn btn-danger"
        data-id={todo.id}
        onClick={handleDelete}
      >
        Borrar
      </button>
    </li>
  );
};
