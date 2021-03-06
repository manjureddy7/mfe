import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import Posts from './components/Posts';
import Users from './components/Users';

// This is to avoid same className collision between microFrontneds || containers
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma' // ma stands for marketing
});

export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/users" component={Users} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
