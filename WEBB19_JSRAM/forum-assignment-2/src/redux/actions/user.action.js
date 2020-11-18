import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER } from "redux/types";

import { alertActions } from "./alert.action";
import { userService } from "services/user.service";

const login = (user) => {
  return (dispatch) => {
    userService.login(user).then(
      (response) => {
        dispatch(success(response.token));
      },
      (error) => {
        console.log(error);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(token) {
    return { type: LOGIN_SUCCESS, token };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
};

const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
  };
};

export const userActions = {
  login,
  logout,
};
