import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  ME_SUCCESS,
} from "redux/types";

import { alertActions } from "./alert.action";
import { userService } from "services/user.service";

const login = (user) => {
  return (dispatch) => {
    userService.login(user).then(
      (response) => {
        dispatch(success(response.token));
      },
      (error) => {
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

const register = (user, history) => {
  return (dispatch) => {
    userService.register(user).then(
      (response) => {
        dispatch(alertActions.success("Account successfully created!"));
        history.push("/login");
      },
      (error) => {
        dispatch(alertActions.error(error));
      }
    );
  };
};

const me = () => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    userService.getMe(authentication.token).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(user) {
    return { type: ME_SUCCESS, user };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
};

const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    dispatch(alertActions.clear());
  };
};

export const userActions = {
  login,
  logout,
  register,
  me,
};
