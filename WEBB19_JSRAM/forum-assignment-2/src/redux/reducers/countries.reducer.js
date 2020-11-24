import { COUNTRIES_SUCCESS, COUNTRIES_FAILURE } from "redux/types";

export default function countries(state = null, action) {
  switch (action.type) {
    case COUNTRIES_SUCCESS:
      return action.countries;
    case COUNTRIES_FAILURE:
      return [];
    default:
      return state;
  }
}
