import React, { Suspense } from 'react';
import {
  Switch,
  Redirect,
} from 'react-router-dom';
import { CContainer } from '@coreui/react';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { NestedRoutes, publicRoutes } from '../../../routes';

const Content = () => (
  <main className="c-main">
    <CContainer fluid>
      <Suspense fallback={LoadingIndicator}>
        <NestedRoutes url="/" routes={publicRoutes} />
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </CContainer>
  </main>
);

export default React.memo(Content);
