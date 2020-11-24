import {
  POSTS_SUCCESS,
  POSTS_FAILURE,
  POSTS_CREATE_SUCCESS,
  POST_BY_ID_SUCCESS,
  POST_REPLIES_SUCCESS,
  POST_CREATE_REPLIES_SUCCESS,
} from "../types";

import { alertActions } from "./alert.action";
import { forumService } from "services/forum.service";

const create = (post, history) => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    forumService.createPost(authentication.token, post).then(
      (post) => {
        dispatch(success(post));
        history.go(0);
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(post) {
    return { type: POSTS_CREATE_SUCCESS, post };
  }
  function failure(error) {
    return { type: POSTS_FAILURE, error };
  }
};

const getAll = () => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    forumService.getAllPosts(authentication.token).then(
      (posts) => {
        dispatch(success(posts));
      },
      (error) => {
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

const getById = (id) => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    forumService.getSinglePost(authentication.token, id).then(
      (post) => {
        dispatch(success(post));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(post) {
    return { type: POST_BY_ID_SUCCESS, post };
  }
  function failure(error) {
    return { type: POSTS_FAILURE, error };
  }
};

const getReplies = (id) => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    forumService.getAllReplies(authentication.token, id).then(
      (replies) => {
        dispatch(success(replies));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(replies) {
    return { type: POST_REPLIES_SUCCESS, replies };
  }
  function failure(error) {
    return { type: POSTS_FAILURE, error };
  }
};

const createReplies = (reply) => {
  return (dispatch, getState) => {
    const { authentication } = getState();
    forumService.createReplies(authentication.token, reply).then(
      (reply) => {
        dispatch(success(reply));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function success(reply) {
    return { type: POST_CREATE_REPLIES_SUCCESS, reply };
  }
  function failure(error) {
    return { type: POSTS_FAILURE, error };
  }
};

export const postActions = {
  create,
  getAll,
  getById,
  getReplies,
  createReplies,
};
