import { combineReducers } from "redux";
import reposReducer from "./reposReducer";

const rootReducer = combineReducers({
  repositories: reposReducer,
});

export default rootReducer;
