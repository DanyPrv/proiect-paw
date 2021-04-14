import { call, put, takeLatest } from 'redux-saga/effects';
import { userOverviewActions } from './slice';
import request from '../../../utils/request';

function* getData() {
  const options = {
    method: 'GET',
  };
  try {
    const data = yield call(request, '/users', options);
    yield put(userOverviewActions.setUsers(data));
  } catch (error) {
    yield put(userOverviewActions.setErrors(error.message));
  }
}

export default function* userOverviewSaga() {
  yield takeLatest(userOverviewActions.getUsers.type, getData);
}
