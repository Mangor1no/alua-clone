/* eslint-disable no-unused-vars */
import unsplashAPI from 'api/unsplashAPI';
import { StatusCodes } from 'constants/httpErrors.js';
import * as TYPES from './types';
import {
  profileDataSelector,
  profileAllowLoadMore,
  profileCurrentPage,
  profileIsFetchingSelector,
} from './selectors';

export const fetchProfileImages = (username, currentPage) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.LOAD_IMAGES_REQUEST });
    const response = await unsplashAPI.getUserImages(username, currentPage);
    if (profileDataSelector(getState()) === null || profileDataSelector(getState()).length === 0) {
      return dispatch({
        type: TYPES.LOAD_IMAGES_SUCCESS,
        payload: response?.data?.results,
      });
    }
    return null;
  } catch (err) {
    return dispatch({
      type: TYPES.LOAD_IMAGES_FAILURE,
      payload: err,
    });
  }
};

export const fetchMoreProfileImages = (username, currentPage) => async (dispatch, getState) => {
  try {
    if (profileAllowLoadMore(getState())) {
      dispatch({ type: TYPES.LOAD_MORE_IMAGES_REQUEST });
      const response = await unsplashAPI.getUserImages(username, currentPage);
      if (response?.data?.results.length > 0) {
        return dispatch({
          type: TYPES.LOAD_MORE_IMAGES_SUCCESS,
          payload: response?.data?.results,
        });
      }
    }
    if (!profileAllowLoadMore(getState())) {
      return dispatch({
        type: TYPES.STOP_LOAD_MORE,
      });
    }
    return null;
  } catch (err) {
    const { status } = err.response;
    if (status === StatusCodes.FORBIDDEN) {
      return dispatch({
        type: TYPES.STOP_LOAD_MORE,
      });
    }
    return dispatch({
      type: TYPES.LOAD_MORE_IMAGES_FAILURE,
      payload: err,
    });
  }
};
