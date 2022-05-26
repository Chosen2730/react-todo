import React from "react";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { useGlobalContext } from "./../context";

const Todo = ({ time, desc, id }) => {
  const { removeItem, completeHandler } = useGlobalContext();

  return (
    <>
      <div className='single_todo'>
        <div className='time single_item'>
          <p className='time-p'>{time}</p>
        </div>
        <div className='desc single_item'>
          <p>{desc}</p>
        </div>
        <div className='time single_item'>
          <i
            onClick={() => completeHandler(id)}
            className='status_icons complete'
          >
            <AiOutlineCheck />
          </i>
          <i onClick={() => removeItem(id)} className='status_icons delete'>
            <AiFillDelete />
          </i>
        </div>
      </div>
      <hr className='line' />
    </>
  );
};

export default Todo;
