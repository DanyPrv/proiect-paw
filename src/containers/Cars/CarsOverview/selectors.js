import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.carsOverview || initialState;

export const selectCarsOverview = createSelector([selectDomain], (state) => state);

export const selectCarsOverviewData = createSelector([selectDomain], (state) => state.cars);

export const selectCarsOverviewErrors = createSelector([selectDomain], (state) => state.errors);
