import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusHook from './ProfileStatus'
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className="profile-info">
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
            <div className="profile-info__photo">
                <img src={props.profile.photos.small}></img>
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