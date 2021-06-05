import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe("Tests on RealExampleRef", () => {
  const wrapper = shallow(<RealExampleRef />);

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not show MultipleCustomHooks component", () => {
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  it("should show MultipleCustomHooks component", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
