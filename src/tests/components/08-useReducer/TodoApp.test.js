import React from "react";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodo } from "../../fixtures/demoTodo";
import { act } from "@testing-library/react";

describe("Pruebas en <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("onAdd")(demoTodo[0]);
      wrapper.find("TodoAdd").prop("onAdd")(demoTodo[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp ( 2 )");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  it("debe de eliminar un todo", () => {
    console.log(wrapper);
    wrapper.find("TodoAdd").prop("onAdd")(demoTodo[0]);
    console.log(wrapper.find("h1").text());
    wrapper.find("TodoList").prop("onDelete")(demoTodo[0].id);

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp ( 0 )");
  });
});
