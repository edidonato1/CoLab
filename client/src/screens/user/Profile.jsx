import { useState, useEffect } from 'react';
import ProfileStyles from '../../stylesheets/ProfileStyles';


export default function Profile(props) {
  const { loggedInUser } = props
  return (
    <ProfileStyles loggedInUser={loggedInUser}>
      <aside className="side-bar">
        <h2>your profile</h2>
        <h4>{loggedInUser?.username}</h4>
        <div id="profile-pic" >
        </div>
      </aside>
    </ProfileStyles>
  )
}