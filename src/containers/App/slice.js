// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';
import { localStorageGet, localStorageRemove, localStorageSet } from '../../utils/localStorage';

export const initialState = {
  user: localStorageGet('user'),
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorageSet('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorageRemove('user');
    },
  },
});

export const { actions: appActions, reducer, name: sliceKey } = appSlice;
