import { combineReducers } from "redux";
import authentication from "./authentication.reducer";
import posts from "./posts.reducer";
import alert from "./alert.reducer";
import categories from "./categories.reducer";
import countries from "./countries.reducer";

const Reducers = combineReducers({
  authentication,
  posts,
  categories,
  countries,
  alert,
});

export default Reducers;
