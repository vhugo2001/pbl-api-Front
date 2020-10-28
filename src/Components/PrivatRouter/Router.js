import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../../Services/AuthService";

const Router = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.getCurrentUser() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default Router;
