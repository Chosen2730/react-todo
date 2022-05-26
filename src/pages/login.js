import React from "react";
import { useGlobalContext } from "../context";

const Login = () => {
  const { number } = useGlobalContext();
  return <h1>Login</h1>;
};
export default Login;
