// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cars: null,
  errors: null,
};

const carsOverviewSlice = createSlice({
  name: 'carsOverview',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    getCars(state, action) {},
    setCars(state, action) {
      state.cars = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const { actions: carsOverviewActions, reducer, name: sliceKey } = carsOverviewSlice;
