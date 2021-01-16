import React from "react";
import User from "./User/User"
import Preloader from '../Preloader/Preloader';
import "./Users.css";
import Paginator from "../Paginator/Paginator";

let Users = (props) => {
    return (
        <div className="users-content">
            {props.isFetching ? <Preloader /> : null}
            <Paginator totalUsers={props.totalUsers} pageSize={props.pageSize} currentPage={props.currentPage} onSetPage={props.onSetPage} portionSize = {10}/>
            <div className="users">
                {props.users.map((u) => (<User src={u.photos.small} followed={u.followed} name={u.name} status={u.status} city={u.city} country={u.country} id={u.id} followInProgress={props.followInProgress} followThunk={props.followThunk} unfollowThunk={props.unfollowThunk}/>))};
            </div>
        </div>
    );
}

export default Users;
