import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ProfileEdit from '../../screens/user/ProfileEdit';
import ProfileAside from '../../components/ProfileAside';
import ProfileStyles from '../../stylesheets/ProfileStyles';

import flask from '../../assets/images/flask.png'


export default function Profile(props) {
  const [editProfile, setEditProfile] = useState(false)
  const [dashVersion, setDashVersion] = useState('')
  const { updated, setUpdated } = props

  const { loggedInUser, media, handleLogout } = props;

  const handler = () => {
    window.innerWidth <= 600 ? setDashVersion('mobile') : setDashVersion('web')
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler)
  }, [])


  if (!loggedInUser) {
    return (<Redirect to="/" />)
  }

  return (
    <>
      {
        editProfile // toggle display between profile and edit profile
          ?
          <ProfileEdit
            dashVersion={dashVersion}
            updated={updated}
            setUpdated={setUpdated}
            setEditProfile={setEditProfile}
            media={media}
            loggedInUser={loggedInUser} />
          :
          <React.Fragment>
            <ProfileStyles >
              <aside className="side-bar">
                <h1 id="profile-title">your dashboard</h1>
                <ProfileAside
                  media={media}
                  loggedInUser={loggedInUser}
                  handleLogout={handleLogout}
                  editProfile={editProfile}
                  setEditProfile={setEditProfile} />
              </aside>
              {
                dashVersion === 'web'  // dashboard of user media-associated images displays only on web breakpoint
                  ?
                  <div className="dash-parent">
                    <h2>at a glance</h2>
                    <div className="dashboard">
                      <div className="dash-photo-box">
                        <div className="photo-box-top">
                          <img alt="dash pic 1" id="top-left" src={loggedInUser.media[0] ? loggedInUser.media[0].img_url : flask} />
                          <img alt="dash pic 2" id="top-right" src={loggedInUser.media[1] ? loggedInUser.media[1].img_url : flask} />
                        </div>
                        <div className="photo-box-bottom">
                          <img alt="dash pic 3" id="bottom" src={loggedInUser.media[2] ? loggedInUser.media[2].img_url : flask} />
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <>
                  </>
              }
            </ProfileStyles>
          </React.Fragment>
      }
    </>
  )
}

