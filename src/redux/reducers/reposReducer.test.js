import * as action from "../actions/repoActions";
import reposReducer, { initialState } from "./reposReducer";

let state = {};

describe("program proms reducer", () => {
  beforeEach(() => {
    state = {
      ...initialState,
    };
  });

  it("should return default state", () => {
    expect(reposReducer(state, action)).toEqual(initialState);
  });
});
