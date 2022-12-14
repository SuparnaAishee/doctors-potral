import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user,loading,error] =useAuthState(auth);
  
const logout =()=>{
  signOut(auth);
}

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/freecamping">FreeCamping</Link>
      </li>
      {user && 

      <li>
        <Link to="/appointment">Appointment</Link>
      </li> 
      }
      <li>
        <Link to="/healthadvice">Health Advice</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>{" "}
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>{user? <button class="btn btn-ghost " onClick={logout}>SignOut</button> :
        <Link to="/login">Login</Link>}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img className="w-40" src={Logo} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
