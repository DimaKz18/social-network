import React from "react";
import {NavLink} from "react-router-dom"
import './Dialog.css'

const Dialog = (props) => {
  
  return (
    <div>
      <div className="dialog">
        <NavLink to={"/dialogs/" + props.id} className="dialog__text">{props.user}</NavLink>
      </div>
    </div>
  );
};

export default Dialog;
