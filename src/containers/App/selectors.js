import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.app || initialState;

export const selectApp = createSelector([selectDomain], (appState) => appState);

export const selectUser = createSelector([selectDomain], (appState) => appState.user);
