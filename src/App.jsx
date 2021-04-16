import React from 'react';
import Header from 'components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import routes from 'routes/routes';
import AppRoute from 'routes/AppRoute';
// import * as paths from 'routes/paths';
import NotFound from 'pages/NotFound';
import 'constants/style.css';

const history = createHistory();
function App() {
  return (
    <div className="font-system">
      <Router history={history} basename="/">
        <Header />
        <>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                exact={route.exact}
                key={route.path}
                path={route.path}
                component={route.renderComponent}
                isPrivate={route.isPrivate}
              />
            ))}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
