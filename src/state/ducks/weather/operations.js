import {
  getWeatherByZipcodesAction,
} from './actions';

const getWeatherByZipcodes = dispatch => payload => dispatch(getWeatherByZipcodesAction(payload));

const operations = {
  getWeatherByZipcodes,
};

export default operations;
