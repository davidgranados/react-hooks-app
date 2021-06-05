import React from "react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
  const onAdd = jest.fn();
  const wrapper = shallow(<TodoAdd onAdd={onAdd} />);

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("NO debe de llamar onAdd", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(onAdd).toHaveBeenCalledTimes(0);
  });

  it("debe de llamar la función onAdd", () => {
    const value = "Aprender Firestore";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(expect.any(Object)); // { }
    expect(onAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
