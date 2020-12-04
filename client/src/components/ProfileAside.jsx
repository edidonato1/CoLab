import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import UserAsideStyles from '../stylesheets/UserAside';


export default function ProfileAside(props) {
  const [mediumLink, setMediumLink] = useState(null);
  const history = useHistory();

  const { loggedInUser, handleLogout, editProfile, setEditProfile } = props;


  if (mediumLink) {
    setMediumLink(null)
    history.push(`/media/${mediumLink}`)
  }

  return (
    <UserAsideStyles>
      <div className="profile-title">
        <h1>{loggedInUser?.username}</h1>
        <img alt="profile pic" className="profile-pic" src={loggedInUser?.img_url ? loggedInUser.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
      </div>
      <div className="user-media">
        <h4>your media</h4>
        <ul>
          {loggedInUser?.media.map(medium =>
            <Link key={ medium.id} to={`/media/${medium.id}`} ><li key={medium.id}>{medium.name}</li></Link>
          )}
        </ul>
        <div className="button-box">
          <button onClick={() => setEditProfile(!editProfile)}>edit</button>
          <button onClick={handleLogout}>log out</button>
        </div>
      </div>
    </UserAsideStyles>
  )
}