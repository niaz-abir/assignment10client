import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.confiq";

export const Authcontext = createContext();

const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);

  const loginwithemailpass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlesignin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const githubsignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenuser) => {
      console.log("on auth state chnage", currenuser);
      setuser(currenuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    loginwithemailpass,
    createlogin,
    googlesignin,
    githubsignin,
  };
  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
