import React from "react";
import { shallow, render } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "./App";
import { repoState } from "../redux/__mock__/repos";

const mockStore = configureMockStore();
const store = mockStore(repoState);

const wrapper = render(
  <Provider store={store}>
    <App />
  </Provider>
);

it("renders App without crashing ", () => {
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
