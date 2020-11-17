import { LOGIN_SUCCESS, LOGIN_FAILURE } from "redux/types";
import { userService } from "services/user.service";

export function login(user) {
  return (dispatch) => {
    userService.login(user).then(
      (token) => {
        dispatch(success(user.token));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function success(token) {
    return { type: LOGIN_SUCCESS, token };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
}
