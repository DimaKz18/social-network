import React from "react";
import './Message.css'

const Message = (props) => {
  return (
    <div>
      <div className="message">
        <p className="message__text">{props.msg}</p>
      </div>
    </div>
  );
};

export default Message;
