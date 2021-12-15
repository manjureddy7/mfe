import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import Auth from './features/auth';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import LinearIndeterminate from './components/Progress';
import { createBrowserHistory } from 'history';

// This is to avoid same className collision between microFrontneds || containers
const generateClassName = createGenerateClassName({
  productionPrefix: 'co' // co stands for container
});

const AuthModule = lazy(() => import('./features/AuthApp'));
const MarketingModule = lazy(() => import('./features/MarketingApp'));
const DashboardModule = lazy(() => import('./features/DashboardApp'));

const history = createBrowserHistory()

const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  // On success login go to dashboard page
  useEffect(() => {
    if(isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn]);

  return(
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
        <Suspense fallback={<LinearIndeterminate />}>
          <Switch>
            <Route exact path="/token" component={Auth} />
            <Route path="/auth" >
              <AuthModule onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn ? <Redirect to="/" /> : <DashboardModule />}
            </Route>
            <Route path="/" component={MarketingModule} />
          </Switch>
        </Suspense>
        
      </Router>
      </StylesProvider>
  )
}

export default App;