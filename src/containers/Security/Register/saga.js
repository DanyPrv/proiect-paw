import { call, put, takeLatest } from 'redux-saga/effects';
import { registerActions } from './slice';
import request from '../../../utils/request';

function* register(action) {
  const options = {
    method: 'POST',
    body: JSON.stringify(action.payload),
  };
  try {
    if (options) {
      const data = yield call(request, '/api/authenticate/register', options, false);
      if (data.status === 'Error') {
        yield put(registerActions.setRegisterError(data.message));
      } else {
        yield put(registerActions.setRegisterSuccess(true));
      }
    }
  } catch (error) {
    yield put(registerActions.setRegisterError(error.message));
  }
}

export default function* loginSaga() {
  yield takeLatest(registerActions.register.type, register);
}
