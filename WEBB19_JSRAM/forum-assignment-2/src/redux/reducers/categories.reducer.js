import { CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "redux/types";

export default function categories(state = null, action) {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return action.categories;
    case CATEGORIES_FAILURE:
      return [];
    default:
      return state;
  }
}
