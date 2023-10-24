// Routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import App from './App';

const Routes = () => (
    <Switch>
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/" component={App} />
    </Switch>
);

export default Routes;
