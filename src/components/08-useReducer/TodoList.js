import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todoList, onDelete, onToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todoList.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i + 1}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};
