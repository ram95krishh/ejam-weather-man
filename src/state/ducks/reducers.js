import { combineReducers } from 'redux-seamless-immutable';
import { reducers as weather } from './weather';

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
