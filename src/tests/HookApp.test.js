import React from "react";
import { shallow } from "enzyme";
import HookApp from "../HooksApp";

describe("Tests on HookApp", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
