import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kUldOfNMU_JC_Fr7aGWlUPMsM08w-ufdKg&usqp=CAU"></img>
        <p className="header__logo-slogan">New social network</p>
        {props.isAuth ? <div><div>{props.login}</div><button onClick={props.logout}>Logout</button></div> : <NavLink className="header__logo-link" to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
