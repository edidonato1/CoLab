import React, { useState, useEffect } from 'react';
import ProfileEdit from '../../screens/user/ProfileEdit';
import ProfileStyles from '../../stylesheets/ProfileStyles';


export default function Profile(props) {
  const [editProfile, setEditProfile] = useState(false)

  const { loggedInUser, media, handleLogout } = props
  return (
    <>
    {
      !editProfile ?
    <React.Fragment>
      <ProfileStyles loggedInUser={loggedInUser}>
        <aside className="side-bar">
                <h2>your profile</h2>
                <p onClick={() => setEditProfile(!editProfile)}>edit</p>
                <p onClick={handleLogout}>log out</p>
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
    </React.Fragment>
    :
          <ProfileEdit
            media={media}
            loggedInUser={loggedInUser} />
    }
    </>
  )
}

 