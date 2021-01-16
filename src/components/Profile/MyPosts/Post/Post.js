import React from "react";
import './Post.css'

const MyPost = (props) => {
  let postData = [
    {message: "Hi!", id: 1},
    {message: "Hello!", id: 2}
  ]
  return (
    <div className="post">
      <img className="post__photo" src={props.img}></img>
      <div className="post__text">
        <p className="post__text-msg">{props.msg}</p>
        <p className="post__text-likes">Likes: {props.likes}</p>
      </div>
    </div>
  );
};

export default MyPost;
