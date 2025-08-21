import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children, ...rest }) {
  const isAuthed = useSelector((s) =>
    Boolean(s.user?.user || s.user?.token || localStorage.getItem("token"))
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthed ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location?.pathname || "/" } }} />
        )
      }
    />
  );
}
