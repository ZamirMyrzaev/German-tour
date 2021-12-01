import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "./fire";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        default:
          return err.code;
      }
    });
  };

  const handleSignUp = () => {
    clearErrors();
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <authContext.Provider
      value={{
        email,
        user,
        handleLogout,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
