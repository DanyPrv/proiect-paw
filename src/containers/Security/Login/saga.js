import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions } from './slice';
import request from '../../../utils/request';
import { appActions } from '../../App/slice';

function* login(action) {
  const options = {
    method: 'POST',
    body: JSON.stringify(action.payload),
  };
  try {
    const data = yield call(request, '/users/login', options, false);
    yield put(appActions.setUser(data));
  } catch (error) {
    yield put(loginActions.setLoginError(true));
  }
}

export default function* loginSaga() {
  yield takeLatest(loginActions.login.type, login);
}
