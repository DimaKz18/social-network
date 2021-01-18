import React, {useState} from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusHook from './ProfileStatus'
import ProfileData from './ProfileData'
import './ProfileInfo.css'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    if(!props.profile) {
        return <Preloader />
    }
    const onSelectedFile = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                deactivateEditMode();
            }
        );
    }
    return (
        <div className="profile-info">
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
            <div className="profile-info__photo">
                <img src={props.profile.photos.large || "https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png"} className="profile-info__photo-link"></img>
                {props.isOwner && <input type="file" onChange={onSelectedFile}/>}
            </div>
            <div className="profile-info__text">
                {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={activateEditMode}/>}
                
            </div>
        </div>
    )
}

export default ProfileInfo;