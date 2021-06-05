import React from "react";
import { mount } from "enzyme";
import { AppContext } from "../../../components/09-useContext/AppContext";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("Pruebas en <LoginScreen />", () => {
  const setAppContext = jest.fn();

  const wrapper = mount(
    <AppContext.Provider
      value={{
        setAppContext,
      }}
    >
      <LoginScreen />
    </AppContext.Provider>
  );

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("debe de ejecutar el setAppContext", () => {
    const submitEvent = {
      preventDefault(){}
    };
    wrapper.find("form").simulate("submit", submitEvent);
    expect(setAppContext).toHaveBeenCalledTimes(1);
  });
});
