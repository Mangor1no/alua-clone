import { combineReducers } from 'redux';
import masonryReducer from './masonry-reducer/reducer';
import profileReducer from './profile-reducer/reducer';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  masonry: masonryReducer,
  profile: profileReducer,
});

export default appReducer;
