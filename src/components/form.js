import React from "react";
import { useGlobalContext } from "./../context";

const Form = () => {
  const { value, handleSubmit, handleChange, name } = useGlobalContext();
  return (
    <form action='' onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        className='input'
        type='text'
      />
      <input className='submit' type='submit' value='add' />
    </form>
  );
};
export default Form;
