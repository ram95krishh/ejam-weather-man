import { all } from 'redux-saga/effects';
import { combinedSaga as weatherSagas } from './weather/sagas';

export default function* rootSaga() {
  yield all([
    weatherSagas(),
  ]);
}
