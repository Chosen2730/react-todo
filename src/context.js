import React, { useState, useContext, useReducer } from "react";
import { reducer } from "./components/reducer";

const AppContext = React.createContext();

const defaultState = {
  value: "",
  todo: [],
  complete: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { value, desc, todo, complete } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "NEW_VALUE", payload: value });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const completeHandler = (id) => {
    dispatch({ type: "COMPLETE", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        handleChange,
        handleSubmit,
        removeItem,
        value,
        desc,
        todo,
        complete,
        completeHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
