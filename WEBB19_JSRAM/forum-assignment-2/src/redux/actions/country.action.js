import { COUNTRIES_SUCCESS, COUNTRIES_FAILURE } from "../types";

import { alertActions } from "./alert.action";
import { forumService } from "services/forum.service";

const getAll = () => {
  return (dispatch) => {
    forumService.getAllCountries().then(
      (countries) => {
    
        dispatch(success(countries));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(countries) {
    return { type: COUNTRIES_SUCCESS, countries };
  }
  function failure(error) {
    return { type: COUNTRIES_FAILURE, error };
  }
};

export const countriesAction = {
  getAll,
};
