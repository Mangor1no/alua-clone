import * as TYPES from './types';

const initialState = {
  isFetching: false,
  data: null,
};

const getCatImages = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.LOAD_IMAGES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.LOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    }
    case TYPES.LOAD_IMAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.LOAD_MORE_IMAGES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.LOAD_MORE_IMAGES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: [...state.data, ...payload],
      };
    }
    case TYPES.LOAD_MORE_IMAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default getCatImages;
