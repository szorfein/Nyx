import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import Routes from './routes';

function App() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Nav />
          <Switch>
            { Routes.map((route: any) => (
              <Route exact path={route.path} key={route.path}>
                <route.component />
              </Route>
            ))};
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
