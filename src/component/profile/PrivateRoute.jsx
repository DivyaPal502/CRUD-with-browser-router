import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  let TOKEN = sessionStorage.getItem("TOKEN");
  console.log("TOKEN----------", TOKEN);
  console.log(children);

  return (
    <Fragment>
      {TOKEN ? <Fragment>{children}</Fragment> : <Navigate to={"/register"} />}
    </Fragment>
  );
};

export default PrivateRoute;
