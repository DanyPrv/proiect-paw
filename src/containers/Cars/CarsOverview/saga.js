import { call, put, takeLatest } from 'redux-saga/effects';
import { carsOverviewActions } from './slice';
import request from '../../../utils/request';

function* getData() {
  const options = {
    method: 'GET',
  };
  try {
    const data = yield call(request, '/cars', options);
    yield put(carsOverviewActions.setCars(data));
  } catch (error) {
    yield put(carsOverviewActions.setErrors(error.message));
  }
}

export default function* carsOverviewSaga() {
  yield takeLatest(carsOverviewActions.getCars.type, getData);
}
