import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from './containers/Dashboard/Loadable';
import Locations from './containers/Locations/LocationsOverview/Loadable';
import LocationsDetail from './containers/Locations/LocationsDetail/Loadable';
import NotFoundPage from './containers/NotFoundPage/Loadable';
import UsersOverview from './containers/Users/UsersOverview/Loadable';
import UserDetails from './containers/Users/UserDetails/Loadable';

export const publicRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    routes: null,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
    routes: [
      {
        path: '/:id/details',
        name: 'Location details',
        component: LocationsDetail,
      },
    ],
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersOverview,
    routes: [
      {
        path: '/:id/details',
        name: 'User details',
        component: UserDetails,
      },
    ],
  },

];

export function NestedRoutes({ routes, url = '' }) {
  const renderRoutes = (arrayRoutes, parentUrl) => {
    if (!arrayRoutes) {
      return null;
    }
    parentUrl = parentUrl === '/' ? '' : parentUrl; // ignore "/" root url so we can use "/<path" further down the nested routes
    return arrayRoutes.map((route) => {
      const {
        component: Component, path, exact = false, strict = false, routes: subRoutes,
      } = route;

      return (
        <Route
          path={`${parentUrl}${path}`}
          key={`${parentUrl}${path}`}
          exact={exact}
          strict={strict}
          render={(props) => (
            <Component {...props} childRoutes={subRoutes}>
              {subRoutes && <NestedRoutes routes={subRoutes} url={`${parentUrl}${path}`} />}
            </Component>
          )}
        />
      );
    });
  };

  return (
    <Switch>
      {renderRoutes(routes, url)}
      <Route render={(props) => <NotFoundPage {...props} />} />
    </Switch>
  );
}
