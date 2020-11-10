import { setCookie } from "utilities/authServices";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      setCookie(action.token);
      return {
        ...state,
        token: action.token,
        activeUser: action.user,
      };

    case "SIGN_OUT":
      return { ...state, signedInUser: null };
    case "REGISTER_USER":
      return;

    case "DELETE_USER":
      return;

    case "SET_CUSTOMER_LIST":
      return;

    default:
      return state;
  }
};

export default GlobalReducer;
