// The initial state of the App container
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  locations: null,
  errors: null,
};

const locationsOverviewSlice = createSlice({
  name: 'locationsOverview',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    getLocations(state, action) {},
    setLocations(state, action) {
      state.locations = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

// eslint-disable-next-line max-len
export const { actions: locationsOverviewActions, reducer, name: sliceKey } = locationsOverviewSlice;
