import { combineReducers } from "redux";
import authentication from "./authentication.reducer";
import posts from "./posts.reducer";
import alert from "./alert.reducer";

console.log(authentication);
const Reducers = combineReducers({
  authentication,
  posts,
  alert,
});

export default Reducers;
