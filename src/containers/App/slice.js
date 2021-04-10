// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { actions: appActions, reducer, name: sliceKey } = appSlice;
