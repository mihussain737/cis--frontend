import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="bg-blue-600 text-white font-semibold flex justify-around">
      <NavLink
      to="/home"
        className={({isActive}) => (isActive ? "text-yellow-300 font-bold" : "")}
      >
        <li>CIS</li>
      </NavLink>
      <NavLink
      to="/about"
        className={({isActive}) => (isActive ? "text-yellow-300 font-bold" : "")}
      >
        <li>About</li>
      </NavLink>
      <NavLink
      to="/services"
        className={({isActive}) => (isActive ? "text-yellow-300 font-bold" : "")}
      >
        <li>Services</li>
      </NavLink>
      <NavLink
      to="/login"
        className={({isActive}) => (isActive ? "text-yellow-300 font-bold" : "")}
      >
        <li>Login</li>
      </NavLink>
      <NavLink
      to="/signup"
        className={({isActive}) => (isActive ? "text-yellow-300 font-bold" : "")}
      >
        <li>Signup</li>
      </NavLink>
      
      
    </ul>
  );
};

export default Navbar;
