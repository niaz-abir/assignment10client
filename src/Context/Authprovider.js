import React, { createContext } from "react";

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
  const user = { name: "abir" };

  const authinfo = { user };
  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
