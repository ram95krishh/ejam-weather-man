import {
  SET_WEATHER_DATA,
} from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA: {
      return state.merge({
        data: {
          ...state.data,
          ...action.payload,
        },
      });
    }

    default:
      return state;
  }
};

export default reducer;
