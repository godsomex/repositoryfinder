import React from "react";
import { shallow, render } from "enzyme";

import Pagination from "./Pagination";

const wrapper = render(<Pagination />);

it("renders App without crashing ", () => {
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
