import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if (!user) return <div>Please login</div>

    return (
        <div>
            <div>Welcome {user.username}</div>
            <div>Welcome {user.password}</div>
        </div>
    )
}

export default Profile