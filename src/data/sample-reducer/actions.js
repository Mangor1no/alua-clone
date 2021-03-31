import sampleAPI from 'api/sampleAPI';
import * as TYPES from './types';
import { sampleDataSelector } from './selectors';

export const fetchSampleData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.SAMPLE_SEND_REQUEST });

    const data = sampleDataSelector(getState());

    // eslint-disable-next-line no-console
    console.log(data); // call some kinds of apis here...

    const response = await sampleAPI.getRandomImage();

    dispatch({
      type: TYPES.SAMPLE_SEND_SUCCESS,
      payload: response?.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.SAMPLE_SEND_FAILURE,
      payload: err,
    });
  }
};
