import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.login || initialState;

export const selectLogin = createSelector([selectDomain], (state) => state);

export const selectLoginError = createSelector([selectDomain], (state) => state.loginError);
