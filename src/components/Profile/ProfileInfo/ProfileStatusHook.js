import React, {useEffect, useState} from 'react';

const ProfileStatusHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);   

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {this.state.editMode ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
                </div> : 
                <div>
                    <span onClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusHook;