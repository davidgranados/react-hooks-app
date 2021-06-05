import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { AppContext } from "../../../components/09-useContext/AppContext";

describe("Pruebas en <AppRouter />", () => {
  const appContext = {
    user: {
      id: 1,
      name: "Fernando",
    },
  };

  const wrapper = mount(
    <AppContext.Provider
      value={{
        appContext,
      }}
    >
      <AppRouter />
    </AppContext.Provider>
  );

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
