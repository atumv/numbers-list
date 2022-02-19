import { all } from 'redux-saga/effects';
import { numberSaga } from './numberSaga';

export function* rootSaga() {
  yield all([numberSaga()]);
}
