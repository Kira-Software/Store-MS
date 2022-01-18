import React from "react";
import { Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const Privateroute = ({ element: Component, ...rest }) => {
  const isauthenticated = useSelector((state) => state.auth.isauthenticated);
  const loading = useSelector((state) => state.auth.loading);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isauthenticated && !loading ? (
          <Navigate to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default Privateroute;
