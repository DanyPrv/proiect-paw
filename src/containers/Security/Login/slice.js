// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loginError: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    login(state, action) {},
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
  },
});

export const { actions: loginActions, reducer, name: sliceKey } = loginSlice;
