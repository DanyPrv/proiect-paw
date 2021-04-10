import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../scss/style.scss';
import { useInjectReducer } from 'redux-injectors';
import Layout from '../Theme/Layout/Loadable';
import Login from '../Security/Login/Loadable';
import Register from '../Security/Register/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';
import { reducer, sliceKey } from './slice';

const App = () => {
  useInjectReducer({ key: sliceKey, reducer });
  // useInjectSaga({ key: sliceKey, saga: appSaga });
  return (
    <BrowserRouter>
      <React.Suspense fallback={LoadingIndicator}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={(props) => <NotFoundPage {...props} />} />
          <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
