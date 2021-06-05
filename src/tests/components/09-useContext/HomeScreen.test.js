import React from "react";
import { mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { AppContext } from "../../../components/09-useContext/AppContext";

describe("Pruebas en <HomeScreen />", () => {
  const appContext = {
    user: {
      id: 123,
      name: "Fernando",
    },
  };

  const wrapper = mount(
    <AppContext.Provider
      value={{
        appContext,
      }}
    >
      <HomeScreen />
    </AppContext.Provider>
  );

  it("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
