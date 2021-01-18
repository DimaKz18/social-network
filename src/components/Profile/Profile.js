import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.css'

const Profile = (props) => {
  return (
    <div className="profile-content">
      <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
