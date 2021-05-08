import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.createLocation || initialState;

export const selectCreateLocation = createSelector([selectDomain], (state) => state);

export const selectCreateLocationError = createSelector(
  [selectDomain], (state) => state.createError,
);

export const selectCreateLocationSuccess = createSelector([selectDomain], (state) => state.success);
