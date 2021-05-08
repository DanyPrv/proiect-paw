import { call, put, takeLatest } from 'redux-saga/effects';
import { createLocationActions } from './slice';
import request from '../../../utils/request';

function* create(action) {
  const options = {
    method: 'POST',
    body: JSON.stringify(action.payload),
  };
  try {
    if (options) {
      yield call(request, '/locations/create', options);
      yield put(createLocationActions.setCreateSuccess(true));
    }
  } catch (error) {
    yield put(createLocationActions.setCreateError(error.message));
  }
}

export default function* loginSaga() {
  yield takeLatest(createLocationActions.create.type, create);
}
