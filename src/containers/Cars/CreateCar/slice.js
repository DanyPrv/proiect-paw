// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  createError: null,
  success: false,
};

const createCarSlice = createSlice({
  name: 'createCar',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    create(state, action) {},
    setCreateError(state, action) {
      state.createError = action.payload;
    },
    setCreateSuccess(state, action) {
      state.success = action.payload;
    },
  },
});

export const { actions: createCarActions, reducer, name: sliceKey } = createCarSlice;
