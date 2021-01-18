import React from 'react'
import ProfileContact from './ProfileContact'

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.activateEditMode}>Edit</button></div>}
            <p>Full name: {props.profile.fullName}</p>
            <p>About me: {props.profile.aboutMe}</p>
            <p>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</p>
            <p>Status: {props.profile.lookingForAJobDescription}</p>
            <div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <ProfileContact key={key} contactName={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}

export default ProfileData;