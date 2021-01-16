import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusHook from './ProfileStatus'
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    const onSelectedFile = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className="profile-info">
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
            <div className="profile-info__photo">
                <img src={props.profile.photos.large || "https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png"} className="profile-info__photo-link"></img>
                {props.isOwner && <input type="file" onChange={onSelectedFile}/>}
            </div>
            <div className="profile-info__text">
                <p>Full name: {props.profile.fullName}</p>
                <p>About me: {props.profile.aboutMe}</p>
                <p>Status: {props.profile.lookingForAJobDescription}</p>
                <p>Facebook: {props.profile.contacts.facebook}</p>
                <p>Twitter: {props.profile.contacts.twitter}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;