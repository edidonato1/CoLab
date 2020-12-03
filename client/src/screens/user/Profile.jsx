import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ProfileEdit from '../../screens/user/ProfileEdit';
import ProfileAside from '../../components/ProfileAside';
import ProfileStyles from '../../stylesheets/ProfileStyles';
import flask from '../../assets/images/flask.png'


export default function Profile(props) {
  const [editProfile, setEditProfile] = useState(false)


  const { loggedInUser, media, handleLogout } = props;

  if (!loggedInUser) {
    return (<Redirect to="/" />)
  }

  return (
    <>
      {
        !editProfile ?
          <React.Fragment>
            <ProfileStyles >
              <aside className="side-bar">
                <h1 id="profile-title">your profile</h1>
                <ProfileAside
                  media={media}
                  loggedInUser={loggedInUser}
                  handleLogout={handleLogout}
                  editProfile={editProfile}
                  setEditProfile={setEditProfile} />


              </aside>
              <div className="dash-parent">
                <h2>dashboard</h2>
                <div className="dashboard">
                  <div className="dash-photo-box">
                    <div className="photo-box-top">
                      <img id="top-left" src={loggedInUser.media[0] ? loggedInUser.media[0].img_url : flask} />
                      <img id="top-right" src={loggedInUser.media[1] ? loggedInUser.media[1].img_url : flask} />
                    </div>
                    <div className="photo-box-bottom">
                      <img id="bottom" src={loggedInUser.media[2] ? loggedInUser.media[2].img_url : flask} />
                    </div>
                  </div>
                </div>
              </div>
            </ProfileStyles>
          </React.Fragment>
          :
          <ProfileEdit
            setEditProfile={setEditProfile}
            media={media}
            loggedInUser={loggedInUser} />
      }
    </>
  )
}

