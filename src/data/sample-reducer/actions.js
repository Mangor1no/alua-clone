/* eslint-disable no-unused-vars */
import sampleAPI from 'api/sampleAPI';
import * as TYPES from './types';
import { sampleDataSelector } from './selectors';

export const fetchCatImages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.LOAD_IMAGES_REQUEST });

    const response = await sampleAPI.getRandomImage();

    dispatch({
      type: TYPES.LOAD_IMAGES_SUCCESS,
      payload: response?.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.LOAD_IMAGES_FAILURE,
      payload: err,
    });
  }
};

export const fetchMoreCatImages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.LOAD_MORE_IMAGES_REQUEST });

    const response = await sampleAPI.getRandomImage();

    dispatch({
      type: TYPES.LOAD_MORE_IMAGES_SUCCESS,
      payload: response?.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.LOAD_MORE_IMAGES_FAILURE,
      payload: err,
    });
  }
};
