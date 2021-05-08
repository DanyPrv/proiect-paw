import { call, put, takeLatest } from 'redux-saga/effects';
import { createCarActions } from './slice';
import request from '../../../utils/request';

function* create(action) {
  const options = {
    method: 'POST',
    body: JSON.stringify(action.payload),
  };
  try {
    if (options) {
      yield call(request, '/cars/create', options);
      yield put(createCarActions.setCreateSuccess(true));
    }
  } catch (error) {
    yield put(createCarActions.setCreateError(error.message));
  }
}

export default function* loginSaga() {
  yield takeLatest(createCarActions.create.type, create);
}
