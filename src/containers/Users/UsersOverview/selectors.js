import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.userOverview || initialState;

export const selectUserOverview = createSelector([selectDomain], (state) => state);

export const selectUserOverviewData = createSelector([selectDomain], (state) => state.users);

export const selectUserOverviewErrors = createSelector([selectDomain], (state) => state.errors);
