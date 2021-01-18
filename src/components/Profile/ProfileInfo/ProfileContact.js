import React from 'react'

const ProfileContact = (props) => {
    return (
        <div>
            <p>{props.contactName}: {!props.contactValue ? "Absent" : props.contactValue}</p>
        </div>
    )
}

export default ProfileContact;