import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component:Component, ...rest }) {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? <Component /> : <Redirect to="/signin" />)}
    />
  );
}
