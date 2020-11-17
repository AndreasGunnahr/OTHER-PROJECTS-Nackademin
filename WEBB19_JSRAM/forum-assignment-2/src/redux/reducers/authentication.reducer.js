import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER } from "redux/types";

const initialState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };

    default:
      return state;
  }
}
