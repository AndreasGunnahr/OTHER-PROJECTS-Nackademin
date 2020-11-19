import { POSTS_SUCCESS, POSTS_FAILURE } from "redux/types";

export default function posts(state = null, action) {
  switch (action.type) {
    case POSTS_SUCCESS:
      return action.posts;
    case POSTS_FAILURE:
      return [];
    default:
      return state;
  }
}
