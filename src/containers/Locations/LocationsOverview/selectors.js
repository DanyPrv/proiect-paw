import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.locationsOverview || initialState;

export const selectLocationsOverview = createSelector([selectDomain], (state) => state);

export const selectLocationsOverviewData = createSelector(
  [selectDomain], (state) => state.locations,
);

export const selectLocationsOverviewErrors = createSelector(
  [selectDomain], (state) => state.errors,
);
