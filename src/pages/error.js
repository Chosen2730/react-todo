import React from "react";
import { useGlobalContext } from "../context";

const Error = () => {
  const { number } = useGlobalContext();
  return <h1>Error</h1>;
};
export default Error;
