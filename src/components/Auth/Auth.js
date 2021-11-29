import React from "react";
import { useAuth } from '../../AuthContext'
import Home from "../Home";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  return <div>{user ? <Home /> : <Login />}</div>;
};

export default Auth;
