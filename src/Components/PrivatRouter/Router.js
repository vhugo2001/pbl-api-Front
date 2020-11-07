import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../../Services/AuthService";

const Router = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = Auth.getCurrentUser();
        if (!currentUser) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        
        if (roles && roles.indexOf(currentUser.roles[0]) === -1) {
          return <Redirect to={{ pathname: "/admin" }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default Router;
