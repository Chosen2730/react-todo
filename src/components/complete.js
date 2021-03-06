import React from "react";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { useGlobalContext } from "./../context";

const Complete = ({ time, desc, id }) => {
  const { removeItem } = useGlobalContext();
  return (
    <>
      <div className='single_todo'>
        <div className='time single_item'>
          <p className='time-p'>{time}</p>
        </div>
        <div className='desc single_item'>
          <p>{desc}</p>
        </div>
        <div className='time single_item status'>
          <i className='status_icons complete_success'>
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

export default Complete;
