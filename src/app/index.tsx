import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { AppC } from './modules/app/appC';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={AppC} />
  </Switch>
));
