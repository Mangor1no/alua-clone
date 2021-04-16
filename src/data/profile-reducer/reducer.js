import * as TYPES from './types';

const initialState = {
  isFetching: false,
  data: null,
  allowLoadMore: true,
  currentPage: 1,
};

const getProfileImages = (state = initialState, { type, payload }) => {
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
        currentPage: state.currentPage + 1,
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
        currentPage: state.currentPage + 1,
      };
    }
    case TYPES.LOAD_MORE_IMAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.STOP_LOAD_MORE:
      return {
        ...state,
        allowLoadMore: false,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default getProfileImages;
