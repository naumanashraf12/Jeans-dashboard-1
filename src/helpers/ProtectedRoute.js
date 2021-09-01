//  eslint-disable
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "./authContext";

function ProtectedRoute({ children, role, ...rest }) {
  const { auth, isLoading } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
          <>
            {auth !== null && auth?.role === role && children}
            <>
              {isLoading ||
                (auth === null && (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: location },
                    }}
                  />
                ))}
            </>
            );
          </>
        );
      }}
    />
  );
}
export default ProtectedRoute;
