import { store } from '../store/store';

export const getUserRoles = () => {
  const { user } = store.getState().app;
  return user.roles ?? [];
};

export const isUserAdmin = () => {
  const roles = getUserRoles();
  return roles.includes('Admin');
};
