import React from "react";
import { shallow, mount, render } from "enzyme";

import Pagination from "./Pagination";
describe("Pagination", () => {
  const props = {
    reposPerPage: 5,
    totalRepos: 1000,
    paginate: jest.fn(),
    currentPage: 1,
  };

  const wrapper = mount(<Pagination {...props} />);

  it("renders App without crashing ", () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders 5 Pagination numbers ", () => {
    const element = wrapper.find('[data-test="pagination-button"]');
    expect(element.length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });
});
