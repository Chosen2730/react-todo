import React from "react";
import { useGlobalContext } from "../context";

const Logout = () => {
  const { number } = useGlobalContext();
  return <h1>You have succesfully logged out</h1>;
};
export default Logout;
