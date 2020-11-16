import { LOGIN_SUCCESS, LOGIN_FAILURE } from "redux/types";
import { userService } from "services/user.service";

export function login(user) {
  return (dispatch) => {
    userService
      .login(user)
      .then((response) => response.json())
      .then((user) => dispatch(success(user.token)))
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  // Måste kolla ifall vi har en error code i services.

  function success(token) {
    return { type: LOGIN_SUCCESS, token };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
}
