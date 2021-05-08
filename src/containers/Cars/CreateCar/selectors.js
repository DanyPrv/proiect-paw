import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.createCar || initialState;

export const selectCreateCar = createSelector([selectDomain], (state) => state);

export const selectCreateCarError = createSelector(
  [selectDomain], (state) => state.createError,
);

export const selectCreateCarSuccess = createSelector([selectDomain], (state) => state.success);
