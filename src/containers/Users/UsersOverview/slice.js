// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  users: null,
  errors: null,
};

const userOverviewSlice = createSlice({
  name: 'userOverview',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    getUsers(state, action) {},
    setUsers(state, action) {
      state.users = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const { actions: userOverviewActions, reducer, name: sliceKey } = userOverviewSlice;
