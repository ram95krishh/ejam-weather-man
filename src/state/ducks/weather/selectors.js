import { pathOr } from 'ramda';

const getWeatherData = state => pathOr({}, ['weather', 'data'], state);

const selectors = {
  getWeatherData,
};

export default selectors;
