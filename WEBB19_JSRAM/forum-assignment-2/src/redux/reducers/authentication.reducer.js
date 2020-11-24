import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  ME_SUCCESS,
} from "redux/types";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };

    case ME_SUCCESS:
    
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
