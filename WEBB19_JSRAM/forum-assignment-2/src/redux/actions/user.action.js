import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER } from "redux/types";
import { userService } from "services/user.service";
// import { useHistory } from "react-router-dom";

export const login = (user) => {
  return (dispatch) => {
    userService.login(user).then(
      (response) => {
        console.log(response.token);
        dispatch(success(response.token));
        // history.push("/dashboard")
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
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
  };
};
