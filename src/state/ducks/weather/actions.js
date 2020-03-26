import {
  GET_WEATHER_BY_ZIPCODES_SAGA,
} from './types';

const getWeatherByZipcodesAction = payload => ({
  type: GET_WEATHER_BY_ZIPCODES_SAGA,
  payload,
});

export {
  // eslint-disable-next-line import/prefer-default-export
  getWeatherByZipcodesAction,
};
