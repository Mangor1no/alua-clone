/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';

function AppRoute({ component: Component, path, isPrivate, ...rest }) {
  return (
    <Route
      path={path}
      render={(props) => {
        if (isPrivate) {
          return <p>Quay xe em ei</p>;
        }
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
}

export default AppRoute;
