import * as React from "react";
import { shallow } from "enzyme";
import Table from "./Table";

describe("<Table />", () => {
  const wrapper = shallow(<Table />);
  it("renders without crashing", () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
