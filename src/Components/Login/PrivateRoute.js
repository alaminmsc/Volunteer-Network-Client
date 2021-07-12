import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.success ? (
            children
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: location } }}
            ></Redirect>
          )
        }
      ></Route>
    </div>
  );
};

export default PrivateRoute;
