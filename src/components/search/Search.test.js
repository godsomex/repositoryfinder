import * as React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("<Search />", () => {
  const wrapper = shallow(<Search />);

  it("renders App without crashing ", () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Search/>", () => {
  it("renders without crashing", () => {
    shallow(<Search />);
  });
});
