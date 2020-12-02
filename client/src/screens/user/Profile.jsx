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
      <div className="dashboard">
        <h2>dashboard</h2>
        {loggedInUser?.media ? 
          <></>
          : 
          <>
            <h4>you haven't set up your media yet.</h4><br />
            <p>edit your profile to add a medium</p>
            <p> </p>
          </>
      }
      </div>
    </ProfileStyles>
  )
}