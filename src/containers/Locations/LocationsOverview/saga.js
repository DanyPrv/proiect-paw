import { call, put, takeLatest } from 'redux-saga/effects';
import { locationsOverviewActions } from './slice';
import request from '../../../utils/request';

function* getData() {
  const options = {
    method: 'GET',
  };
  try {
    const data = yield call(request, '/locations', options);
    yield put(locationsOverviewActions.setLocations(data));
  } catch (error) {
    yield put(locationsOverviewActions.setErrors(error.message));
  }
}

export default function* locationsOverviewSaga() {
  yield takeLatest(locationsOverviewActions.getLocations.type, getData);
}
