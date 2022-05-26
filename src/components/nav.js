import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className='nav_header'>React Todo</div>
      <Link className='nav_button' to='/'>
        <button>Home</button>
      </Link>
      <Link className='nav_button' to='/logout'>
        <button>About</button>
      </Link>
    </nav>
  );
};
export default Nav;
