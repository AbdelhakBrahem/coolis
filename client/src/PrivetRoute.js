import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


function PrivetRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !auth.isAuth ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    </div>
  );
}

export default PrivetRoute;
