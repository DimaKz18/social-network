import React from "react";
import {NavLink} from "react-router-dom"
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <NavLink to="/profile" className="navBar__link">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className="navBar__link">Dialogs</NavLink>
      </div>
      <div>
        <NavLink to="/users" className="navBar__link">Users</NavLink>
      </div>
      <div>
        <NavLink to="/news" className="navBar__link">News</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className="navBar__link">Settings</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
