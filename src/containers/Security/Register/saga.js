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
      yield call(request, '/users/register', options, false);
      yield put(registerActions.setRegisterSuccess(true));
    }
  } catch (error) {
    yield put(registerActions.setRegisterError(error.message));
  }
}

export default function* loginSaga() {
  yield takeLatest(registerActions.register.type, register);
}
