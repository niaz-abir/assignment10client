import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovider";

const Privateroute = ({ children }) => {
  const { user } = useContext(Authcontext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default Privateroute;
