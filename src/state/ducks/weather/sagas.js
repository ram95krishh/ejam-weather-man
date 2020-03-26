import {
  takeEvery,
  all,
  call,
  put,
  // putResolve,
  select,
} from 'redux-saga/effects';

import {
  GET_WEATHER_BY_ZIPCODES_SAGA,
  SET_WEATHER_DATA,
} from './types';
import selectors from './selectors';
import notyNotification from '../../../lib/Noty';
import { callPost } from '../../../lib/Api';
import { weatherAPI } from '../../../utils/constants';

function* getWeatherByZipcodes({ payload: zipCodes }) {
  try {
    const existingWeatherData = yield select(selectors.getWeatherData);
    const zipCodesToFetch = zipCodes.filter(
      zipCode => !Object.keys(existingWeatherData).includes(zipCode),
    );
    if (zipCodesToFetch.length) {
      const weatherData = yield call(callPost, `${weatherAPI}/weather/getbyzipcodes`, { zipCodes: zipCodesToFetch });
      yield put({ type: SET_WEATHER_DATA, payload: weatherData });
    }
    notyNotification('Success!', 'Successfully updated weather board!', 'success');
  } catch (e) {
    notyNotification('Oops', 'Sorry, Something went wrong!', 'error');
  }
}

function* watchWeatherCalls() {
  yield takeEvery(GET_WEATHER_BY_ZIPCODES_SAGA, getWeatherByZipcodes);
}

export const TestExports = {
  getWeatherByZipcodes,
};

// eslint-disable-next-line
export function* combinedSaga() {
  yield all([
    watchWeatherCalls(),
  ]);
}
