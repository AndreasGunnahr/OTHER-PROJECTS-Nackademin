import {
  POSTS_SUCCESS,
  POSTS_FAILURE,
  POSTS_CREATE_SUCCESS,
  POST_BY_ID_SUCCESS,
  POST_REPLIES_SUCCESS,
  POST_CREATE_REPLIES_SUCCESS,
} from "redux/types";

export default function posts(state = null, action) {
  switch (action.type) {
    case POSTS_SUCCESS:
      return { all_posts: action.posts };

    case POSTS_CREATE_SUCCESS:
      return { ...state, all_post: [...state.all_posts, action.post] };

    case POST_BY_ID_SUCCESS:
      return { ...state, post: action.post };

    case POST_REPLIES_SUCCESS:
      return { ...state, replies: action.replies };

    case POST_CREATE_REPLIES_SUCCESS:
      return { ...state, replies: [...state.replies, action.reply] };
    case POSTS_FAILURE:
      return { ...state };

    default:
      return state;
  }
}
