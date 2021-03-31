import { combineReducers } from 'redux';
import sampleReducer from './sample-reducer/reducer';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  sample: sampleReducer,
});

export default appReducer;
