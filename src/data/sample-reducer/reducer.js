import * as TYPES from './types';

const initialState = {
  isFetching: false,
  data: null,
};

const sendSampleRequest = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SAMPLE_SEND_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.SAMPLE_SEND_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.SAMPLE_SEND_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default sendSampleRequest;
