import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as action from "../actions/repoActions";
import { initialState } from "../reducers/reposReducer";
import moxios from "moxios";

const mockStore = configureMockStore([thunk]);

const makeMockStore = (state = {}) => mockStore({ ...state });

const store = makeMockStore(initialState);

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        id: 12,
        name: "goc",
        user: "http",
        full_name: "gggsdfdf",
        stargazers_count: "3444534",
        language: "Javascript",
        owner: {
          login: "godsomex",
          html_url: "htpp",
        },
      },
      {
        id: 13,
        name: "godspower",
        user: "https",
        full_name: "beauty",
        stars_count: "34445377",
        language: "c++",
        owner: {
          login: "godsomex",
          html_url: "htpp",
        },
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: initialState,
      });
    });

    return store.dispatch(action.getReposBysearch("react", 1)).then(() => {
      console.log(store);
      const newState = store.getState();
      console.log(newState);
      expect(newState.repos).toEqual(expectedState);
    });
  });
});
