import React from "react";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from "../../fixtures/demoTodo";

//demoTodo

describe("Pruebas en <TodoListItem />", () => {
  const onDelete = jest.fn();
  const onToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodo[0]}
      index={0}
      onDelete={onDelete}
      onToggle={onToggle}
    />
  );

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("debe de llamar la función handleDelete", () => {
    const button = wrapper.find("button");
    const clickEvent = {
      target: {
        dataset: {
          id: button.prop("data-id"),
        },
      },
    };
    button.simulate("click", clickEvent);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(
      parseInt(clickEvent.target.dataset.id)
    );
  });

  it("debe de llamar la función onToggle", () => {
    const p = wrapper.find("p");
    const clickEvent = {
      target: {
        dataset: {
          id: p.prop("data-id"),
        },
      },
    };
    p.simulate("click", clickEvent);
    expect(onToggle).toHaveBeenCalledWith(
      parseInt(clickEvent.target.dataset.id)
    );
  });

  it("debe de mostrar el texto correctamente", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`0. ${demoTodo[0].desc}`);
  });

  it("debe de tener la clase complete si el TODO.done = true", () => {
    const todo = demoTodo[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={todo} />);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
