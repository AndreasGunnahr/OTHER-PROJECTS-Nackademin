import { CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "../types";

import { alertActions } from "./alert.action";
import { forumService } from "services/forum.service";

const getAll = () => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    forumService.getAllCategories(authentication.token).then(
      (categories) => {
        dispatch(success(categories));
      },
      (error) => {
    
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(categories) {
    return { type: CATEGORIES_SUCCESS, categories };
  }
  function failure(error) {
    return { type: CATEGORIES_FAILURE, error };
  }
};

export const categoriesAction = {
  getAll,
};
