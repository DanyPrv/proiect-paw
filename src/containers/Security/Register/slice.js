// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  registerError: null,
  success: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    register(state, action) {},
    setRegisterError(state, action) {
      state.registerError = action.payload;
    },
    setRegisterSuccess(state, action) {
      state.success = action.payload;
    },
  },
});

export const { actions: registerActions, reducer, name: sliceKey } = registerSlice;
