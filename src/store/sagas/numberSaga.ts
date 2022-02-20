import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { Response, INumber } from 'shared/interfaces';

import {
  FETCH_NUMBERS_REQUESTED,
  FETCH_NUMBERS,
  FETCH_HAS_RESULTS,
  FETCH_NO_RESULTS,
  ADD_NUMBER_REQUESTED,
  ADD_NUMBER,
  CLEAR_NUMBERS,
} from 'store/actionTypes';

import { fetchAllNumbers, addNewNumber } from 'store/api/numberApi';

interface Payload {
  type: string;
  payload: string;
}

function* fetchNumbers() {
  yield takeEvery(FETCH_NUMBERS_REQUESTED, function* ({ payload }: Payload) {
    const numbers: INumber[] = yield call(fetchAllNumbers, payload);

    if (numbers.length) {
      yield put({ type: FETCH_HAS_RESULTS });
      yield put({ type: FETCH_NUMBERS, payload: numbers });
    } else {
      yield put({ type: FETCH_NO_RESULTS });
      yield put({ type: CLEAR_NUMBERS });
    }
  });
}

function* addNumber() {
  yield takeEvery(ADD_NUMBER_REQUESTED, function* ({ payload }: Payload) {
    const newNumber: Response = yield call(addNewNumber, payload);
    yield put({ type: ADD_NUMBER, payload: newNumber });
  });
}

export function* numberSaga() {
  yield all([fork(fetchNumbers), fork(addNumber)]);
}
