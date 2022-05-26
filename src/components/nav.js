import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Nav = () => {
  const { number } = useGlobalContext();
  return (
    <nav>
      <div className='nav_header'>React Todo</div>
      <Link className='nav_button' to='/'>
        <button>Home</button>
      </Link>
      <Link className='nav_button' to='/logout'>
        <button>Log out</button>
      </Link>
    </nav>
  );
};
export default Nav;
