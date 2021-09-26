import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import LoginPage from "../Login/LoginPage";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // protected route
  // calling authState for token check
  const { authState } = useContext(AuthContext);

  // {...rest} represents all props for example some custom prop via router
  // {...props} represents all dependency props for a component like history etc.
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return authState.token ? (
            <>
              <Component {...rest} {...props} />
            </>
          ) : (
            <>
              <LoginPage />
            </>
          );
        }}
      />
    </>
  );
};
export default ProtectedRoute;
