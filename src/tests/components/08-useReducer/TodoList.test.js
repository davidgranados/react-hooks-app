import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodo } from "../../fixtures/demoTodo";

describe("Pruebas en <TodoList />", () => {
  const onDelete = jest.fn();
  const onToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todoList={demoTodo}
      onDelete={onDelete}
      onToggle={onToggle}
    />
  );

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("debe de tener dos <TodoListItem />", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodo.length);

    expect(wrapper.find("TodoListItem").at(0).prop("onDelete")).toEqual(
      expect.any(Function)
    );
  });
});
