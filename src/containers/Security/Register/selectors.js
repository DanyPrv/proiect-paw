import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state) => state.register || initialState;

export const selectLogin = createSelector([selectDomain], (state) => state);

export const selectRegisterError = createSelector([selectDomain], (state) => state.registerError);

export const selectRegisterSuccess = createSelector([selectDomain], (state) => state.success);
