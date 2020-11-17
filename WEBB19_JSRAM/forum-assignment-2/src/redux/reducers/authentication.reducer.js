import { LOGIN_SUCCESS, LOGIN_FAILURE } from "redux/types";

const initialState = {
  loading: false,
  authenticated: false,
  token: null,
  user: null,
  error: null,
};

export default function authentication(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action);
      console.log(state);
      return {
        ...state,
        authenticated: true,
        token: action.token,
      };
    case LOGIN_FAILURE:
      console.log(action);
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
