import React from 'react'
import {NavLink} from "react-router-dom"
import './User.css'

const User = (props) => {
    let toggleFollow = (status, id) => {
        if(status===true) {
            props.unfollowThunk(id)
        }
        else {
            props.followThunk(id)
        }
    }
    return (
        <div>
            <div className='user'>
                <div className='user__logo'>
                    <NavLink to={"/profile/" + props.id}>
                        <div>
                            <img src={props.src != null ? props.src : "https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png"}></img>
                        </div>
                    </NavLink>
                    <div>
                        <button disabled={props.followInProgress.some(id => id === props.id)} onClick={() => {toggleFollow(props.followed, props.id)}}>{props.followed ? "Follow" : "Unfollow"}</button>
                    </div>
                </div>
                <div className='user__info'>
                    <div className='user__info-item'>
                        <p>{props.name}</p>
                        <p>{props.status != null ? props.status : "I'm employe"}</p>
                    </div>
                    <div className='user__info-item'>
                        <p>{props.city != null ? props.city : "Los Angeles"}</p>
                        <p>{props.country != null ? props.country : "USA"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;

