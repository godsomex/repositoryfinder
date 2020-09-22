import { SEARCH_REPO } from "../actions/constants";

export const initialState = {
  total: 2,
  repos: [
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
  ],
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REPO:
      return Object.assign({}, state, {
        repos: action.payload.items,
        total: action.payload.total_count,
      });
    default: {
      return state;
    }
  }
};

export default reposReducer;
