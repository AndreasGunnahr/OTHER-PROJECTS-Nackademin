import { POSTS_SUCCESS, POSTS_FAILURE } from "../types";

import { alertActions } from "./alert.action";
import { userService } from "services/user.service";

const getAll = () => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    userService.getAllPosts(authentication.token).then(
      (posts) => {
        dispatch(success(posts));
      },
      (error) => {
        console.log(error);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(posts) {
    return { type: POSTS_SUCCESS, posts };
  }
  function failure(error) {
    return { type: POSTS_FAILURE, error };
  }
};

export const postActions = {
  getAll,
};
