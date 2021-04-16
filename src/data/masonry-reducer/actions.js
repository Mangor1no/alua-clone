/* eslint-disable no-unused-vars */
import unsplashAPI from 'api/unsplashAPI';
import { StatusCodes } from 'constants/httpErrors.js';
import * as TYPES from './types';
import {
  masonryDataSelector,
  masonryAllowLoadMore,
  masonryCurrentPage,
  masonryIsFetchingSelector,
} from './selectors';

export const fetchMasonryImages = (currentPage) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.LOAD_IMAGES_REQUEST });
    const response = await unsplashAPI.getRandomImage(currentPage);
    if (masonryDataSelector(getState()) === null || masonryDataSelector(getState()).length === 0) {
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

export const fetchMoreMasonryImages = (currentPage) => async (dispatch, getState) => {
  try {
    if (masonryAllowLoadMore(getState())) {
      dispatch({ type: TYPES.LOAD_MORE_IMAGES_REQUEST });
      const response = await unsplashAPI.getRandomImage(currentPage);
      if (response?.data?.results.length > 0) {
        return dispatch({
          type: TYPES.LOAD_MORE_IMAGES_SUCCESS,
          payload: response?.data?.results,
        });
      }
    }
    if (!masonryAllowLoadMore(getState())) {
      return dispatch({
        type: TYPES.STOP_LOAD_MORE,
      });
    }
    return null;
  } catch (err) {
    // console.log(err.response);
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
