import axios from "axios";
import { SEARCH_REPO } from "./constants";

export const getReposBysearch = (
  searchWord,
  currentPage = 1,
  perPage
) => async (dispatch) => {
  return axios
    .get(
      `https://api.github.com/search/repositories?q=${searchWord}+in:name&page=${currentPage}&sort=stars&order=desc&per_page=${perPage}`
    )
    .then((response) => {
      dispatch({
        type: SEARCH_REPO,
        payload: response.data,
      });
    });
};
