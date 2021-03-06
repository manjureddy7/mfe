import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/SignUp'

// This is to avoid same className collision between microFrontneds || containers
const generateClassName = createGenerateClassName({
  productionPrefix: 'auth' // auth stands for Auth module
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path="/auth/signin" component={Signin} />
            <Route exact path="/auth/signup" component={Signup} /> */}
            <Route exact path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route exact path="/auth/signup">
              <Signup onSignIn={onSignIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
