import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Auth from './features/auth';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import LinearIndeterminate from './components/Progress';

// This is to avoid same className collision between microFrontneds || containers
const generateClassName = createGenerateClassName({
  productionPrefix: 'co' // co stands for container
});

const AuthModule = lazy(() => import('./features/AuthApp'));
const MarketingModule = lazy(() => import('./features/MarketingApp'));

const App = () => {
    return(
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<LinearIndeterminate />}>
            <Switch>
              <Route exact path="/token" component={Auth} />
              <Route path="/auth" component={AuthModule} />
              <Route path="/" component={MarketingModule} />
            </Switch>
          </Suspense>
          
        </BrowserRouter>
        </StylesProvider>


    )
}

export default App;